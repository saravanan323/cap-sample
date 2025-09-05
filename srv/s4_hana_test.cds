using s4_hana_test from './external/s4_hana_test.cds';

service SalesOrderService {
    @readonly
    entity A_SalesOrder as
        projection on s4_hana_test.A_SalesOrder {
            key SalesOrder,
                SalesOrderType,
                SalesOrganization,
                DistributionChannel,
                SoldToParty,
                CreationDate,
                CreatedByUser,
                LastChangeDateTime,
                SalesOrderDate,
                TotalNetAmount,
                TransactionCurrency,
                BillingPlan,
                IncotermsTransferLocation,
                CustomerPaymentTerms,
                OverallSDProcessStatus
        };
}
