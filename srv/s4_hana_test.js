const cds = require('@sap/cds');

module.exports = async (srv) => {
  const s4 = await cds.connect.to("s4_hana_test");

  // READ (Get Sales Orders)
  srv.on('READ', 'A_SalesOrder', async (req) => {
    console.log("🔎 READ:", req.query);
    return s4.run(req.query);
  });

  // CREATE (Insert Sales Order)
  srv.on('CREATE', 'A_SalesOrder', async (req) => {
    try {
      console.log("📥 CREATE:", req.data);
      const result = await s4.run(req.query, req.data);
      console.log("✅ Created:", result);
      return result;
    } catch (err) {
      console.error("❌ Error in CREATE:", err);
      req.error(500, err.message);
    }
  });

  // UPDATE (Modify Sales Order)
  srv.on('UPDATE', 'A_SalesOrder', async (req) => {
    try {
      console.log("✏️ UPDATE:", req.data);
      const result = await s4.run(req.query, req.data);
      console.log("✅ Updated:", result);
      return result;
    } catch (err) {
      console.error("❌ Error in UPDATE:", err);
      req.error(500, err.message);
    }
  });

  // DELETE (Remove Sales Order)
  srv.on('DELETE', 'A_SalesOrder', async (req) => {
    try {
      console.log("🗑️ DELETE:", req.data);
      const result = await s4.run(req.query);
      console.log("✅ Deleted:", result);
      return result;
    } catch (err) {
      console.error("❌ Error in DELETE:", err);
      req.error(500, err.message);
    }
  });
};