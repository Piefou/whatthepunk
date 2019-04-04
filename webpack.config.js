const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	// entry: "./src/index.js",
	// output: "./dist/main.js",
	devtool: isProd ? 'none' : 'inline-source-map',
	mode: isProd ? 'production' : 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
				],
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist/'),
		port: 3000,
		publicPath: 'http://localhost:3000/',
		compress: true,
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [
				'**/*',
				path.join(__dirname, 'report/**/*'),
			],
		}),
		new webpack.ProgressPlugin(),
		new BundleAnalyzerPlugin({
			openAnalyzer: false,
			analyzerMode: 'static',
			reportFilename: path.join(__dirname, 'report/bundleAnalyzer.html'),
		}),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new CopyWebpackPlugin([{ from: 'assets', to: 'assets' }]),
	],
};
