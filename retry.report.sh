#!/bin/bash
cat reports/json/cucumber.json | ./node_modules/.bin/cucumber-junit > reports/cucumber_rerun_xml.xml