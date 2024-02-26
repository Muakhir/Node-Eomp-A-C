import { Connection as db } from "../config/index.js";

class Products {
    fetchProducts(req, res){
        const qry = `SELECT prodID, prodImg, prodName, prodQuantity, prodAmount
                    FROM Products;`
        
                    db.query(qry,(err, results)=>{
                        if (err) throw err
                        res.json({
                            status: res.statusCode,
                            results
                        })
                    })
    }

    fetchProduct(req, res){
        const qry = `SELECT prodID, prodImg,prodName, prodQuantity,prodAmount
                    FROM Products
                    WHERE prodID = ${req.params.id}`
        
                    db.query(qry,(err, result) => {
                        if (err) throw err
                        res.json({ status: res.statusCode, result: result[0]})
                    })
    }

    addProduct(req, res){
        const qry = `INSERT INTO Products SET?;`

        db.query(qry,[req.body], (err) => {
            if(err) throw err
            res.json({ status: res.statusCode,
                      msg: "New product added successfully"})
        })
    }

    async deleteProduct(req,res){
        let data = req.body
        const qry = `DELETE FROM Products WHERE prodID =${req.params.id}`
        db.query(qry,[data],(err)=>{
            if(err) throw err
            res.json({status: res.statusCode,msg:"Product deleted successfully"})
        })
    }

    async alterProduct(req,res){
        let data = req.body
        const qry = `UPDATE Products SET? WHERE prodID = ${req.params.id}`
        db.query(qry,[data],(err)=>{
            if(err) throw err
            res.json({status: res.statusCode,msg:"Product updated successfully"})
        })
    }
}

export {Products}