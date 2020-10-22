import mongodb from 'mongodb'

export type TransactionType = {
    amount: Number
	date: Date
	transaction_type: string
}

export class Transaction {
  private collection: mongodb.Collection<TransactionType>

  constructor(db: mongodb.Db) {
    this.collection = db.collection('transaction')
  }

  async create(data : TransactionType) {
    try{
      const result = await this.collection.insertOne(data)
      console.log('Insert result %j', result)
    } catch (error){
      throw error
    }

  }

  async getAll() {
    let transactions : TransactionType[]
    try{
      transactions = await this.collection.find().toArray()
    }catch(error){
      throw error
    }
    return transactions
  }

  async getByID(transactionID : string) {
    let transaction : TransactionType | null
    try{
      transaction = await this.collection.findOne({ _id: new mongodb.ObjectID(transactionID)})
    }catch(error){
      throw error
    }

    return transaction
  }

  async update(transactionID : string, updateData: Partial<TransactionType>) {
    try{
       await this.collection.updateOne({ _id: new mongodb.ObjectID(transactionID)}, {$set: updateData})
    }catch (error){
      throw error;
    
    }
  }

  async delete(transactionID : string) {
    try{
      await this.collection.deleteOne({ _id: new mongodb.ObjectID(transactionID)})
   }catch (error){
     throw error;
   }
  }
}