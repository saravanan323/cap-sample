const cds = require('@sap/cds');

module.exports = async (srv) => 
{        
    // Using CDS API      
    const s4_hana_test = await cds.connect.to("s4_hana_test"); 
      srv.on('READ', 'A_SalesOrder', req => s4_hana_test.run(req.query)); 
}