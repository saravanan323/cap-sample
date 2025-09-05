sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"app/businesspartner/test/integration/pages/A_BusinessPartnerList",
	"app/businesspartner/test/integration/pages/A_BusinessPartnerObjectPage"
], function (JourneyRunner, A_BusinessPartnerList, A_BusinessPartnerObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('app/businesspartner') + '/index.html',
        pages: {
			onTheA_BusinessPartnerList: A_BusinessPartnerList,
			onTheA_BusinessPartnerObjectPage: A_BusinessPartnerObjectPage
        },
        async: true
    });

    return runner;
});

