const express = require('express')
const fs = require('fs')
const path = require('path')
const uploader = require('../uploader')
const readFiles = require('../controllers/readFiles')
const titleParser = require('../controllers/titleParser')
const xlsxWriter = require('../controllers/xlsxWriter')



module.exports = {
    pageLoad: async (req, res) => {
        //on pageload, we must generate an empty 'uploads' folder
        try {
            fs.rmSync('uploads', { recursive: true })
            fs.mkdirSync('uploads')
        } catch (err) {
            if (err) {
                fs.mkdirSync('uploads')
            }
        }
        res.render('index', {titleData: [[],[]], downloadEnabled: false})
    },

    pageLoadWithTableData : async (req, res) => {
        const fileData = await readFiles.readAndExtract()
        const titleData = await titleParser.parse(fileData)
        res.render('index', {titleData: titleData, downloadEnabled: true})
    },

    sendEstimate: (req, res) => {
        const filePath = path.join(__dirname, '..', 'newEstimate.xlsx')
        res.sendFile(filePath);
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





