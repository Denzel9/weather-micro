import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
import 'webpack-dev-server'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import packageJson from './package.json'

type TMode = 'development' | 'production'

interface EnvVariables {
  mode: TMode
  port: number
}

export default (env: EnvVariables) => {
  const isDevelopment = env.mode === 'development'

  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    devtool: isDevelopment && 'inline-source-map',
    devServer: isDevelopment
      ? {
          port: env.port ?? 3000,
          open: true,
          hot: true,
          historyApiFallback: true,
        }
      : undefined,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                getCustomTransformers: () => ({
                  before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean),
                }),
                transpileOnly: isDevelopment,
              },
            },
          ],
        },
        {
          test: /\.scss$/i,
          include: path.resolve(__dirname, 'src'),
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            "sass-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: 'css/[id].[contenthash].css',
      }),
      isDevelopment && new ReactRefreshWebpackPlugin(),
      new webpack.container.ModuleFederationPlugin({
        name: 'WEATHER',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App',
          './Widget': './src/components/weather-widget/Widget',
        },
        shared: {
          ...packageJson.dependencies,
          'react': {
            eager: true,
            requiredVersion: packageJson.dependencies.react,
          },
          'react-router-dom': {
            eager: true,
            requiredVersion: packageJson.dependencies['react-router-dom'],
          },
          'react-dom': {
            eager: true,
            requiredVersion: packageJson.dependencies['react-dom'],
          },
        },
      }),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js', 'css'],
    },
  }
  return config
}
