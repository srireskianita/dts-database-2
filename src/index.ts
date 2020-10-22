// register root file untuk menggunakan sourcemap
import 'source-map-support/register'

import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import bodyParser from 'body-parser'
import { mongo } from 'mongoose'
import mongodb from 'mongodb'
import { Customer, CustomerType } from './customer'
import { Account, AccountType } from './account'
import { Transaction, TransactionType } from './transaction'

//use Mongoose
//import mongoose from 'mongoose'
//import { Customer, CustomerType } from './mongoose'


async function initApp() {
  const app = express()

  //init db
  const connection = await mongodb.connect(`${process.env.MONGODB_URI}`, {useUnifiedTopology: true})
  const db =  connection.db(`${process.env.MONGODB_NAME}`)
  const customerModel = new Customer(db)
  const accountModel = new Account(db)
  const transactionModel = new Transaction(db)

  app.use(bodyParser.json())

  //Customer
  app.post('/customer', async function(req, res, next) {
    try{
      await customerModel.create(req.body)
    }catch (error){
      return next(error)
    }

    res.send({success :true})
  })

  app.get('/customer', async function(req, res, next) {
    let customers : CustomerType[]
    try {
      customers = await customerModel.getAll()
    } catch (error){
      return next(error)
    }

    return res.send(customers)
  })

  app.get('/customer/:id', async function(req, res, next) {
    let customer: CustomerType | null
    try{
      customer = await customerModel.getByID(req.params.id)
    } catch (error){
      return next(error)
    }

    return res.send(customer)
  })

  app.put('/customer', async function(req, res, next) {
    try{
      await customerModel.update(req.params.id, req.body)
    } catch (error){
      return next(error)
    }

    res.send({success :true})
  })

  app.delete('/customer', async function(req, res, next) {
    try{
      await customerModel.delete(req.params.id)
    } catch (error){
      return next(error)
    }

    res.send({success : true})
  })

  //Account
  app.post('/account', async function(req, res, next) {
    try{
      await accountModel.create(req.body)
    }catch (error){
      return next(error)
    }

    res.send({success :true})
  })

  app.get('/account', async function(req, res, next) {
    let accounts : AccountType[]
    try {
      accounts = await accountModel.getAll()
    } catch (error){
      return next(error)
    }

    return res.send(accounts)
  })

  app.get('/account/:id', async function(req, res, next) {
    let account: AccountType | null
    try{
      account = await accountModel.getByID(req.params.id)
    } catch (error){
      return next(error)
    }

    return res.send(account)
  })

  app.put('/account', async function(req, res, next) {
    try{
      await accountModel.update(req.params.id, req.body)
    } catch (error){
      return next(error)
    }

    res.send({success :true})
  })

  app.delete('/account', async function(req, res, next) {
    try{
      await accountModel.delete(req.params.id)
    } catch (error){
      return next(error)
    }

    res.send({success : true})
  })

  //Transaction
  app.post('/transaction', async function(req, res, next) {
    try{
      await transactionModel.create(req.body)
    }catch (error){
      return next(error)
    }

    res.send({success :true})
  })

  app.get('/transaction', async function(req, res, next) {
    let transactions : TransactionType[]
    try {
      transactions = await transactionModel.getAll()
    } catch (error){
      return next(error)
    }

    return res.send(transactions)
  })

  app.get('/transaction/:id', async function(req, res, next) {
    let transaction: TransactionType | null
    try{
      transaction= await transactionModel.getByID(req.params.id)
    } catch (error){
      return next(error)
    }

    return res.send(transaction)
  })

  app.put('/transaction', async function(req, res, next) {
    try{
      await transactionModel.update(req.params.id, req.body)
    } catch (error){
      return next(error)
    }

    res.send({success :true})
  })

  app.delete('/transaction', async function(req, res, next) {
    try{
      await transactionModel.delete(req.params.id)
    } catch (error){
      return next(error)
    }

    res.send({success : true})
  })


  app.use(function(err: Error, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(500).send({
      success: false,
      message: err.message
    })
  })

  app.listen(process.env.PORT || 8000, () => {
    console.log(`App listen on port ${ process.env.PORT || 8000 }`)
  })
}

initApp()