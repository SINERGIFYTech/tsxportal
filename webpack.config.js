const Path = require("path");
const Webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Handlebars = require("handlebars");

const opts = {
  rootDir: process.cwd(),
  devBuild: process.env.NODE_ENV !== "production"
};

module.exports = {
  // core directory
  entry: {
    'app': "./src/assets/js/app.js",
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: process.env.NODE_ENV === "production" ? "source-map" : "inline-source-map",
  output: {
    path: Path.join(opts.rootDir, "dist"),
    pathinfo: opts.devBuild,
    filename: "assets/js/[name].js",
    chunkFilename: 'assets/js/[name].js',

  },
  performance: { hints: false },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 5
        }
      }),
      new CssMinimizerPlugin({})
    ],
    runtimeChunk: false
  },
  plugins: [
    // Extract css files to seperate bundle
    new MiniCssExtractPlugin({
      filename: "assets/css/app.css",
      chunkFilename: "assets/css/app.css"
    }),

    // Copy fonts and images to dist
    new CopyWebpackPlugin({
      patterns: [
        // images copy
        { from: "src/assets/img", to: "assets/img" },
        // page level scripts 
        { from: "src/assets/js/component", to: "assets/js/component" },
        { from: "src/assets/js/investment", to: "assets/js/investment" },
        // demo pages
        // { from: "src/pages", to: "" },
      ]
    }),

    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),

    // blank
    new HtmlWebpackPlugin({ filename: "index.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/index.html", inject: true, hash: true, title: "Blank Page" }),
    new HtmlWebpackPlugin({ filename: "page-not-found.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/page-not-found.html", inject: true, hash: true, title: "Error 404" }),
    new HtmlWebpackPlugin({ filename: "page-not-found-2.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/page-not-found-2.html", inject: true, hash: true, title: "Error 404" }),
    new HtmlWebpackPlugin({ filename: "page-not-found-3.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/page-not-found-3.html", inject: true, hash: true, title: "Error 404" }),
    new HtmlWebpackPlugin({ filename: "under-construction.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/under-construction.html", inject: true, hash: true, title: "Under Construction" }),
    new HtmlWebpackPlugin({ filename: "coming-soon.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/coming-soon.html", inject: true, hash: true, title: "Coming Soon" }),

    //investment     
    new HtmlWebpackPlugin({ filename: "investment-splash.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-splash.html", inject: true, hash: true, title: "investment-splash" }),
    new HtmlWebpackPlugin({ filename: "investment-aboutus.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-aboutus.html", inject: true, hash: true, title: "investment-aboutus" }),
    new HtmlWebpackPlugin({ filename: "investment-add-blog.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-add-blog.html", inject: true, hash: true, title: "Add Blog" }),
    new HtmlWebpackPlugin({ filename: "investment-add-goal.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-add-goal.html", inject: true, hash: true, title: "Add Goal" }),
    new HtmlWebpackPlugin({ filename: "investment-add-invoice.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-add-invoice.html", inject: true, hash: true, title: "Add Invoice" }),
    new HtmlWebpackPlugin({ filename: "investment-add-ticket.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-add-ticket.html", inject: true, hash: true, title: "Add Ticket" }),
    new HtmlWebpackPlugin({ filename: "investment-billing.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-billing.html", inject: true, hash: true, title: "investment-billing" }),
    new HtmlWebpackPlugin({ filename: "investment-blog-details.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-blog-details.html", inject: true, hash: true, title: "Blog Details" }),
    new HtmlWebpackPlugin({ filename: "investment-blogs.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-blogs.html", inject: true, hash: true, title: "investment-blogs" }),
    new HtmlWebpackPlugin({ filename: "investment-calculator.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-calculator.html", inject: true, hash: true, title: "investment-calculator" }),
    new HtmlWebpackPlugin({ filename: "investment-change-password.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-change-password.html", inject: true, hash: true, title: "investment-change-password" }),
    new HtmlWebpackPlugin({ filename: "investment-chat-call.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-chat-call.html", inject: true, hash: true, title: "investment-chat-call" }),
    new HtmlWebpackPlugin({ filename: "investment-company-shares.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-company-shares.html", inject: true, hash: true, title: "investment-company-shares" }),
    new HtmlWebpackPlugin({ filename: "investment-contactus.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-contactus.html", inject: true, hash: true, title: "investment-contactus" }),
    new HtmlWebpackPlugin({ filename: "investment-dashboard.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-dashboard.html", inject: true, hash: true, title: "investment-dashboard" }),
    new HtmlWebpackPlugin({ filename: "investment-deposit.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-deposit.html", inject: true, hash: true, title: "investment-deposit" }),
    new HtmlWebpackPlugin({ filename: "investment-earning.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-earning.html", inject: true, hash: true, title: "investment-earning" }),
    new HtmlWebpackPlugin({ filename: "investment-explore.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-explore.html", inject: true, hash: true, title: "Investment Explore" }),
    new HtmlWebpackPlugin({ filename: "investment-forgot-password.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-forgot-password.html", inject: true, hash: true, title: "investment-forgot-password" }),
    new HtmlWebpackPlugin({ filename: "investment-goals.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-goals.html", inject: true, hash: true, title: "investment-goals" }),
    new HtmlWebpackPlugin({ filename: "investment-help-center.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-help-center.html", inject: true, hash: true, title: "investment-help-center" }),
    new HtmlWebpackPlugin({ filename: "investment-inbox.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-inbox.html", inject: true, hash: true, title: "investment-inbox" }),
    new HtmlWebpackPlugin({ filename: "investment-investment-plans.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-investment-plans.html", inject: true, hash: true, title: "investment-investment-plans" }),
    new HtmlWebpackPlugin({ filename: "investment-login.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-login.html", inject: true, hash: true, title: "investment-login" }),
    new HtmlWebpackPlugin({ filename: "investment-mutual-funds.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-mutual-funds.html", inject: true, hash: true, title: "investment-mutual-funds" }),
    new HtmlWebpackPlugin({ filename: "investment-mutual-fund-detail.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-mutual-fund-detail.html", inject: true, hash: true, title: "Mutual Fund Details" }),
    new HtmlWebpackPlugin({ filename: "investment-myprofile.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-myprofile.html", inject: true, hash: true, title: "investment-myprofile" }),
    new HtmlWebpackPlugin({ filename: "investment-mysubscription.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-mysubscription.html", inject: true, hash: true, title: "investment-mysubscription" }),
    new HtmlWebpackPlugin({ filename: "investment-onboarding.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-onboarding.html", inject: true, hash: true, title: "investment-onboarding" }),
    new HtmlWebpackPlugin({ filename: "investment-pages.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-pages.html", inject: true, hash: true, title: "investment-pages" }),
    new HtmlWebpackPlugin({ filename: "investment-personalization.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-personalization.html", inject: true, hash: true, title: "investment-personalization" }),
    new HtmlWebpackPlugin({ filename: "investment-portfolio.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-portfolio.html", inject: true, hash: true, title: "investment-portfolio" }),
    new HtmlWebpackPlugin({ filename: "investment-profile-kyc-start.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-profile-kyc-start.html", inject: true, hash: true, title: "investment-profile-kyc-start" }),
    new HtmlWebpackPlugin({ filename: "investment-profile-kyc.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-profile-kyc.html", inject: true, hash: true, title: "investment-profile-kyc" }),
    new HtmlWebpackPlugin({ filename: "investment-profile.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-profile.html", inject: true, hash: true, title: "investment-profile" }),
    new HtmlWebpackPlugin({ filename: "investment-referral.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-referral.html", inject: true, hash: true, title: "investment-referral" }),
    new HtmlWebpackPlugin({ filename: "investment-schedule.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-schedule.html", inject: true, hash: true, title: "investment-schedule" }),
    new HtmlWebpackPlugin({ filename: "investment-search-mutual-funds.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-search-mutual-funds.html", inject: true, hash: true, title: "investment-search-mutual-funds" }),
    new HtmlWebpackPlugin({ filename: "investment-search-result.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-search-result.html", inject: true, hash: true, title: "investment-search-result" }),
    new HtmlWebpackPlugin({ filename: "investment-settings-contact.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-settings-contact.html", inject: true, hash: true, title: "investment-settings-contact" }),
    new HtmlWebpackPlugin({ filename: "investment-settings-payment.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-settings-payment.html", inject: true, hash: true, title: "investment-settings-payment" }),
    new HtmlWebpackPlugin({ filename: "investment-settings-timing.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-settings-timing.html", inject: true, hash: true, title: "investment-settings-timing" }),
    new HtmlWebpackPlugin({ filename: "investment-settings-users.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-settings-users.html", inject: true, hash: true, title: "investment-settings-users" }),
    new HtmlWebpackPlugin({ filename: "investment-settings.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-settings.html", inject: true, hash: true, title: "investment-settings" }),
    new HtmlWebpackPlugin({ filename: "investment-share-details.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-share-details.html", inject: true, hash: true, title: "Share Details" }),
    new HtmlWebpackPlugin({ filename: "investment-signup-success.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-signup-success.html", inject: true, hash: true, title: "investment-signup-success" }),
    new HtmlWebpackPlugin({ filename: "investment-signup.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-signup.html", inject: true, hash: true, title: "investment-signup" }),
    new HtmlWebpackPlugin({ filename: "investment-statistics.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-statistics.html", inject: true, hash: true, title: "investment-statistics" }),
    new HtmlWebpackPlugin({ filename: "investment-subscriptions.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-subscriptions.html", inject: true, hash: true, title: "investment-subscriptions" }),
    new HtmlWebpackPlugin({ filename: "investment-ticket-list.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-ticket-list.html", inject: true, hash: true, title: "investment-ticket-list" }),
    new HtmlWebpackPlugin({ filename: "investment-transaction.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-transaction.html", inject: true, hash: true, title: "investment-transaction" }),
    new HtmlWebpackPlugin({ filename: "investment-users.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-users.html", inject: true, hash: true, title: "investment-users" }),
    new HtmlWebpackPlugin({ filename: "investment-wallet.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-wallet.html", inject: true, hash: true, title: "investment-wallet" }),
    new HtmlWebpackPlugin({ filename: "investment-loan-list.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-loan-list.html", inject: true, hash: true, title: "investment-loan-list" }),
    new HtmlWebpackPlugin({ filename: "investment-loan-request.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-loan-request.html", inject: true, hash: true, title: "investment-loan-request" }),
    new HtmlWebpackPlugin({ filename: "investment-loan-request-success.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-loan-request-success.html", inject: true, hash: true, title: "investment-loan-request-success" }),
    new HtmlWebpackPlugin({ filename: "investment-loan-details.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-loan-details.html", inject: true, hash: true, title: "investment-loan-details" }),
    new HtmlWebpackPlugin({ filename: "investment-loan-under-process-details.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/investment-loan-under-process-details.html", inject: true, hash: true, title: "investment-loan-under-process-details" }),


    //components
    new HtmlWebpackPlugin({ filename: "components.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/components.html", inject: true, hash: true, title: "components" }),
    new HtmlWebpackPlugin({ filename: "component-accordions.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-accordions.html", inject: true, hash: true, title: "component-accordions" }),
    new HtmlWebpackPlugin({ filename: "component-alerts.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-alerts.html", inject: true, hash: true, title: "component-alerts" }),
    new HtmlWebpackPlugin({ filename: "component-avatar.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-avatar.html", inject: true, hash: true, title: "component-avatar" }),
    new HtmlWebpackPlugin({ filename: "component-badges.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-badges.html", inject: true, hash: true, title: "component-badges" }),
    new HtmlWebpackPlugin({ filename: "component-bootstrap-icons.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-bootstrap-icons.html", inject: true, hash: true, title: "component-bootstrap-icons" }),
    new HtmlWebpackPlugin({ filename: "component-bootstrap-icons.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-bootstrap-icons.html", inject: true, hash: true, title: "component-bootstrap-icons" }),
    new HtmlWebpackPlugin({ filename: "component-breadcrumbs.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-breadcrumbs.html", inject: true, hash: true, title: "component-breadcrumbs" }),
    new HtmlWebpackPlugin({ filename: "component-button-groups.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-button-groups.html", inject: true, hash: true, title: "component-button-groups" }),
    new HtmlWebpackPlugin({ filename: "component-buttons.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-buttons.html", inject: true, hash: true, title: "component-buttons" }),
    new HtmlWebpackPlugin({ filename: "component-cards.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-cards.html", inject: true, hash: true, title: "component-cards" }),
    new HtmlWebpackPlugin({ filename: "component-chartjs.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-chartjs.html", inject: true, hash: true, title: "component-chartjs" }),
    new HtmlWebpackPlugin({ filename: "component-checkboxes.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-checkboxes.html", inject: true, hash: true, title: "component-checkboxes" }),
    new HtmlWebpackPlugin({ filename: "component-collapse.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-collapse.html", inject: true, hash: true, title: "component-collapse" }),
    new HtmlWebpackPlugin({ filename: "component-colors.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-colors.html", inject: true, hash: true, title: "component-colors" }),
    new HtmlWebpackPlugin({ filename: "component-datatable.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-datatable.html", inject: true, hash: true, title: "component-datatable" }),
    new HtmlWebpackPlugin({ filename: "component-daterangepicker.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-daterangepicker.html", inject: true, hash: true, title: "component-daterangepicker" }),
    new HtmlWebpackPlugin({ filename: "component-dragula.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-dragula.html", inject: true, hash: true, title: "component-dragula" }),
    new HtmlWebpackPlugin({ filename: "component-dropdowns.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-dropdowns.html", inject: true, hash: true, title: "component-dropdowns" }),
    new HtmlWebpackPlugin({ filename: "component-dropzone.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-dropzone.html", inject: true, hash: true, title: "component-dropzone" }),
    new HtmlWebpackPlugin({ filename: "component-feather-icons.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-feather-icons.html", inject: true, hash: true, title: "component-feather-icons" }),
    new HtmlWebpackPlugin({ filename: "component-floating-label.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-floating-label.html", inject: true, hash: true, title: "component-floating-label" }),
    new HtmlWebpackPlugin({ filename: "component-full-calendar.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-full-calendar.html", inject: true, hash: true, title: "component-full-calendar" }),
    new HtmlWebpackPlugin({ filename: "component-header.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-header.html", inject: true, hash: true, title: "component-header" }),
    new HtmlWebpackPlugin({ filename: "component-heights-widths.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-heights-widths.html", inject: true, hash: true, title: "component-heights-widths" }),
    new HtmlWebpackPlugin({ filename: "component-icon-buttons.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-icon-buttons.html", inject: true, hash: true, title: "component-icon-buttons" }),
    new HtmlWebpackPlugin({ filename: "component-input-groups.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-input-groups.html", inject: true, hash: true, title: "component-input-groups" }),
    new HtmlWebpackPlugin({ filename: "component-inputs.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-inputs.html", inject: true, hash: true, title: "component-inputs" }),
    new HtmlWebpackPlugin({ filename: "component-list-groups.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-list-groups.html", inject: true, hash: true, title: "component-list-groups" }),
    new HtmlWebpackPlugin({ filename: "component-margin-padding.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-margin-padding.html", inject: true, hash: true, title: "component-margin-padding" }),
    new HtmlWebpackPlugin({ filename: "component-modal-dialogues.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-modal-dialogues.html", inject: true, hash: true, title: "component-modal-dialogues" }),
    new HtmlWebpackPlugin({ filename: "component-nav.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-nav.html", inject: true, hash: true, title: "component-nav" }),
    new HtmlWebpackPlugin({ filename: "component-off-canvas.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-off-canvas.html", inject: true, hash: true, title: "component-off-canvas" }),
    new HtmlWebpackPlugin({ filename: "component-pagination.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-pagination.html", inject: true, hash: true, title: "component-pagination" }),
    new HtmlWebpackPlugin({ filename: "component-popovers.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-popovers.html", inject: true, hash: true, title: "component-popovers" }),
    new HtmlWebpackPlugin({ filename: "component-pricing.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-pricing.html", inject: true, hash: true, title: "component-pricing" }),
    new HtmlWebpackPlugin({ filename: "component-progress.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-progress.html", inject: true, hash: true, title: "component-progress" }),
    new HtmlWebpackPlugin({ filename: "component-progressbar-js.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-progressbar-js.html", inject: true, hash: true, title: "component-progressbar-js" }),
    new HtmlWebpackPlugin({ filename: "component-radios.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-radios.html", inject: true, hash: true, title: "component-radios" }),
    new HtmlWebpackPlugin({ filename: "component-riskometer.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-riskometer.html", inject: true, hash: true, title: "component-riskometer" }),
    new HtmlWebpackPlugin({ filename: "component-scrollspy.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-scrollspy.html", inject: true, hash: true, title: "component-scrollspy" }),
    new HtmlWebpackPlugin({ filename: "component-selects.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-selects.html", inject: true, hash: true, title: "component-selects" }),
    new HtmlWebpackPlugin({ filename: "component-sidebars.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-sidebars.html", inject: true, hash: true, title: "component-sidebars" }),
    new HtmlWebpackPlugin({ filename: "component-sliders.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-sliders.html", inject: true, hash: true, title: "component-sliders" }),
    new HtmlWebpackPlugin({ filename: "component-smartwizard.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-smartwizard.html", inject: true, hash: true, title: "component-smartwizard" }),
    new HtmlWebpackPlugin({ filename: "component-spinners-loaders.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-spinners-loaders.html", inject: true, hash: true, title: "component-spinners-loaders" }),
    new HtmlWebpackPlugin({ filename: "component-swiper-carousel.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-swiper-carousel.html", inject: true, hash: true, title: "component-swiper-carousel" }),
    new HtmlWebpackPlugin({ filename: "component-switches.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-switches.html", inject: true, hash: true, title: "component-switches" }),
    new HtmlWebpackPlugin({ filename: "component-tables.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-tables.html", inject: true, hash: true, title: "component-tables" }),
    new HtmlWebpackPlugin({ filename: "component-tabs.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-tabs.html", inject: true, hash: true, title: "component-tabs" }),
    new HtmlWebpackPlugin({ filename: "component-toasts.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-toasts.html", inject: true, hash: true, title: "component-toasts" }),
    new HtmlWebpackPlugin({ filename: "component-tooltips.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-tooltips.html", inject: true, hash: true, title: "component-tooltips" }),
    new HtmlWebpackPlugin({ filename: "component-validation.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/component-validation.html", inject: true, hash: true, title: "component-validation" }),

    // documentation
    new HtmlWebpackPlugin({ filename: "documentation.html", template: "!!html-webpack-plugin/lib/loader.js!./src/pages/documentation.html", inject: true, title: "Document" }),
  ],
  module: {
    rules: [
      // Babel-loader
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      },
      // Css-loader & sass-loader
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },

      // Load fonts
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]"
        }
      },

      // Load images
      {
        test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name][ext]"
        }
      },

      {
        test: /\.html$/,
        exclude: /(node_modules)/,
        use: {
          loader: "html-loader",
          options: {
            sources: false,
          }
        }
      },
    ]
  },
  resolve: {
    extensions: [".js", ".scss"],
    modules: ["node_modules"],
    alias: {
      request$: "xhr"
    }
  },
  devServer: {
    static: {
      directory: Path.join(__dirname, "dist")
    },
    port: 8080,
    open: true,
  }
};
