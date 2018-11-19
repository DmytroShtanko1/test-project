const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

require("babel-core/register");
require("babel-polyfill");

require('nightwatch-cucumber')({
    cucumberArgs: [
        '--require-module', 'babel-core/register',
        '--require', 'timeout.js',
        '--require', 'hooks.js',
        '--require', 'step_definitions',
        '--format', 'json:reports/json/cucumber.json',
        '--format', 'node_modules/cucumber-pretty',
        'features'],
    nightwatchOutput: true
});

module.exports = {
    output_folder: 'reports',
    custom_commands_path: ['commands'],
    custom_assertions_path: ['assertions'],
    page_objects_path: ['pages'],
    globals_path: "globals.js",
    live_output: false,
    disable_colors: false,
    parallel_process_delay: 5000, //5000
    test_workers: {
        enabled: false,
        workers: 'auto'
    },
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: '',
        host: '127.0.0.1',
        port: 4444
    },
    test_settings: {
        default: {
            launch_url: '127.0.0.1',
            selenium_port: 4444,
            selenium_host: '127.0.0.1',
            silent: true,
            end_session_on_fail: true,
            request_timeout_options: {
                timeout: 15000,
                retry_attempts: 5
            },
            skip_testcases_on_fail: true,
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: true,
                path: "./screenshots"
            },

            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                'webdriver.chrome.driver': chromedriver.path
            }
        },

        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                request_timeout_options: {
                    timeout: 15000,
                    retry_attempts: 5
                },
                acceptSslCerts: true,
                chromeOptions: {
                    args: ["--no-sandbox", "ignore-certificate-errors", '-window-size=1920,1080', 'incognito']
                },
                loggingPrefs: {
                    browser: "ALL",
                    driver: "ALL"
                },
                screenshots: {
                    enabled: true,
                    on_failure: true,
                    on_error: true,
                    path: './screenshots/chrome'
                },
                globals: {
                    base_url: '',
                    demo_url: '',
                    admin_email: '',
                    admin_password: '',
                    admin_initials: '',
                    unknown_email: '...',
                    unknown_password: '...'
                },
            },
            selenium: {
                cli_args: {
                    'webdriver.chrome.driver': chromedriver.path
                },
            }
        },

        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true,
                acceptInsecureCerts: true,
                request_timeout_options: {
                    timeout: 15000,
                    retry_attempts: 5
                },
                log: {
                    level: {"browser": "ALL"}
                },
                screenshots: {
                    enabled: true,
                    on_failure: true,
                    on_error: true,
                    path: './screenshots/firefox'
                },
                args: ['--window-size=1920,1080'],
                marionette: true
            },
            selenium: {
                cli_args: {
                    'webdriver.gecko.driver': geckodriver.path
                }
            }
        },

        tablet: {
            desiredCapabilities: {
                browserName: 'chrome',
                browser_version: '58.0',
                os: 'Wondows',
                os_version: '10',
                resolution: '1024x768',
                excludeSwitches: ["disable-popup-blocking"],
                chromeOptions: {
                    args: ["touch-events= disabled",
                        "start-maximised",
                        "--use-mobile-user-agent=true",
                        "--version",
                        "--user-agent=Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mas OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Geko) Version/4.0.4 Mobile/7B334b Safari/531.21.10"
                    ]
                }
            },
            selenium: {
                cli_args: {
                    'webdriver.chrome.driver': chromedriver.path
                },
            },
        },

        headless: {
            launch_url: '...',
            selenium_port: 4444,
            selenium_host: '127.0.0.1',
            end_session_on_fail: true,
            request_timeout_options: {
                timeout: 15000,
                retry_attempts: 5
            },
            skip_testcases_on_fail: true,
            globals: {
                base_url: '',
                admin_email: '...',
                admin_password: '...',
                admin_initials: '...',
                unknown_email: '...',
                unknown_password: '...'
            },
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                loggingPrefs: {
                    browser: "ALL",
                    driver: "ALL"
                },
                chromeOptions: {
                    args: ['incognito', "--no-sandbox", "ignore-certificate-errors", "--headless", '-window-size=1920,1080']
                }
            },
            selenium: {
                cli_args: {
                    'webdriver.chrome.driver': chromedriver.path
                }
            },
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: true,
                path: 'screenshots/headless'
            }
        },
    }
};