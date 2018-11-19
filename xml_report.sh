#!/bin/bash
cat reports/json/cucumber.json | ./node_modules/.bin/cucumber-junit > reports/cucumber_report_xml.xml