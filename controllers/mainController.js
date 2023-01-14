const express = require('express')
const uploader = require('../uploader')
const readFiles = require('../controllers/readFiles')
const titleParser = require('../controllers/titleParser')
const xlsxWriter = require('../controllers/xlsxWriter')



module.exports = {
    pageLoad: async (req, res) => {
        res.render('index', {titleData: [[],[]], downloadEnabled: false})
    },

    pageLoadWithTableData : async (req, res) => {
        const fileData = await readFiles.readAndExtract()
        const titleData = await titleParser.parse(fileData)
        res.render('index', {titleData: titleData, downloadEnabled: true})
    },

    uploadFiles: async (req, res, next) => {
        const uploadPromise = new Promise((resolve, reject) => {
            uploader(req, res, (error) => {if (error) {reject(error)}
             else {resolve()}
            })
            res.redirect('/readFiles')
          })
    }, 

    readFiles: async (req, res) => {
      const fileData = await readFiles.readAndExtract()
      const titleData = await titleParser.parse(fileData)
      const writeXlsx = await xlsxWriter.write(titleData, fileData[1]) 
        res.redirect('/written')
    }
    
}





