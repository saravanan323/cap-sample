const cds = require('@sap/cds');

module.exports = async (srv) => 
{        
    // Using CDS API      
    const s4_bp = await cds.connect.to("s4_bp"); 
      srv.on('READ', 'A_BusinessPartner', req => s4_bp.run(req.query)); 
      srv.on('READ', 'A_Customer', req => s4_bp.run(req.query)); 
      srv.on('READ', 'A_Supplier', req => s4_bp.run(req.query)); 
}