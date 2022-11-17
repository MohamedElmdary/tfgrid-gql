function __PageInfo() {
  return `
    fragment _PageInfo on PageInfo {
        hasNextPage,
        hasPreviousPage,
        startCursor,
        endCursor
    }`;
}

function __Account() {
  return `
    ${__HistoricalBalance()}
    fragment _Account on Account {
        id,
        wallet,
        balance,
        historicalBalances { ..._HistoricalBalance }
    }`;
}

function __AccountEdge() {
  return `
    ${__Account()}
    fragment _AccountEdge on AccountEdge {
        node { ..._Account },
        cursor
    }`;
}

function __AccountsConnection() {
  return `
    ${__AccountEdge()}
    ${__PageInfo()}
    fragment _AccountsConnection on AccountsConnection {
        edges { ..._AccountEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __HistoricalBalance() {
  return `
    ${__Account()}
    fragment _HistoricalBalance on HistoricalBalance {
        id,
        account { ..._Account },
        balance,
        timestamp
    }`;
}

function __HistoricalBalanceEdge() {
  return `
    ${__HistoricalBalance()}
    fragment _HistoricalBalanceEdge on HistoricalBalanceEdge {
        node { ..._HistoricalBalance },
        cursor
    }`;
}

function __HistoricalBalancesConnection() {
  return `
    ${__HistoricalBalanceEdge()}
    ${__PageInfo()}
    fragment _HistoricalBalancesConnection on HistoricalBalancesConnection {
        edges { ..._HistoricalBalanceEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __Transfer() {
  return `
    fragment _Transfer on Transfer {
        id,
        from,
        to,
        amount,
        timestamp
    }`;
}

function __TransferEdge() {
  return `
    ${__Transfer()}
    fragment _TransferEdge on TransferEdge {
        node { ..._Transfer },
        cursor
    }`;
}

function __TransfersConnection() {
  return `
    ${__TransferEdge()}
    ${__PageInfo()}
    fragment _TransfersConnection on TransfersConnection {
        edges { ..._TransferEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __Entity() {
  return `
  fragment _Entity on Entity {
        id,
        gridVersion,
        entityID,
        name,
        country,
        city,
        accountID
    }`;
}

function __EntityEdge() {
  return `
    ${__Entity()}
    fragment _EntityEdge on EntityEdge {
        node { ..._Entity },
        cursor
    }`;
}

function __EntitiesConnection() {
  return `
    ${__EntityEdge()}
    ${__PageInfo()}
    fragment _EntitiesConnection on EntitiesConnection {
        edges { ..._EntityEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __Twin() {
  return `
    fragment _Twin on Twin {
        id,
        gridVersion,
        twinID,
        accountID,
        ip
    }`;
}

function __TwinEdge() {
  return `
    ${__Twin()}
    fragment _TwinEdge on TwinEdge {
        node { ..._Twin },
        cursor
    }`;
}

function __TwinsConnection() {
  return `
    ${__TwinEdge()}
    ${__PageInfo()}
    fragment _TwinsConnection on TwinsConnection {
        edges { ..._TwinEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __EntityProof() {
  return `
    ${__Twin()}
    fragment _EntityProof on EntityProof {
        id,
        entityID,
        signature,
        twinRel { ..._Twin }
    }`;
}

function __EntityProofEdge() {
  return `
    ${__EntityProof()}
    fragment _EntityProofEdge on EntityProofEdge {
        node { ..._EntityProof },
        cursor
    }`;
}

function __EntityProofsConnection() {
  return `
    ${__EntityProofEdge()}
    ${__PageInfo()}
    fragment _EntityProofsConnection on EntityProofsConnection {
        edges { ..._EntityProofEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __Farm() {
  return `
    ${__PublicIp()}
    fragment _Farm on Farm {
        id,
        gridVersion,
        farmID,
        name,
        twinID,
        pricingPolicyID,
        certification,
        publicIPs { ..._PublicIp },
        stellarAddress,
        dedicatedFarm
    }`;
}

function __FarmEdge() {
  return `
    ${__Farm()}
    fragment _FarmEdge on FarmEdge {
        node { ..._Farm },
        cursor
    }`;
}

function __FarmsConnection() {
  return `
    ${__FarmEdge()}
    ${__PageInfo()}
    fragment _FarmsConnection on FarmsConnection {
        edges { ..._FarmEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __PublicIp() {
  return `
    ${__Farm()}
    fragment _PublicIp on PublicIp {
        id,
        farm { ..._Farm },
        gateway,
        ip,
        contractId
    }`;
}

function __PublicIpEdge() {
  return `
    ${__PublicIp()}
    fragment _PublicIpEdge on PublicIpEdge {
        node { ..._PublicIp },
        cursor
    }`;
}

function __PublicIpsConnection() {
  return `
    ${__PublicIpEdge()}
    ${__PageInfo()}
    fragment _PublicIpsConnection on PublicIpsConnection {
        edges { ..._PublicIpEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __Node() {
  return `
    ${__Location()}
    ${__PublicConfig()}
    ${__NodeResourcesTotal()}
    ${__Interfaces()}
    fragment _Node on Node {
        id,
        gridVersion,
        nodeID,
        farmID,
        twinID,
        location { ..._Location },
        country,
        city,
        publicConfig { ..._PublicConfig },
        resourcesTotal { ..._NodeResourcesTotal },
        uptime,
        created,
        farmingPolicyId,
        interfaces { ..._Interfaces },
        certification,
        secure,
        virtualized,
        serialNumber,
        createdAt,
        updatedAt,
        connectionPrice
    }`;
}

function __NodeEdge() {
  return `
    ${__Node()}
    fragment _NodeEdge on NodeEdge {
        node { ..._Node },
        cursor
    }`;
}

function __NodesConnection() {
  return `
    ${__NodeEdge()}
    ${__PageInfo()}
    fragment _NodesConnection on NodesConnection {
        edges { ..._NodeEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __NodeResourcesTotal() {
  return `
    ${__Node()}
    fragment _NodeResourcesTotal on NodeResourcesTotal {
        id,
        node { ..._Node },
        hru,
        sru,
        cru,
        mru
    }`;
}

function __NodeResourcesTotalEdge() {
  return `
    ${__NodeResourcesTotal()}
    fragment _NodeResourcesTotalEdge on NodeResourcesTotalEdge {
        node { ..._NodeResourcesTotal },
        cursor
    }`;
}

function __NodeResourcesTotalsConnection() {
  return `
    ${__NodeResourcesTotalEdge()}
    ${__PageInfo()}
    fragment _NodeResourcesTotalsConnection on NodeResourcesTotalsConnection {
        edges { ..._NodeResourcesTotalEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __Interfaces() {
  return `
    ${__Node()}
    fragment _Interfaces on Interfaces {
        id,
        node { ..._Node },
        name,
        mac,
        ips
    }`;
}

function __InterfacesEdge() {
  return `
    ${__Interfaces()}
    fragment _InterfacesEdge on InterfacesEdge {
        node { ..._Interfaces },
        cursor
    }`;
}

function __InterfacesConnection() {
  return `
    ${__InterfacesEdge()}
    ${__PageInfo()}
    fragment _InterfacesConnection on InterfacesConnection {
        edges { ..._InterfacesEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __PublicConfig() {
  return `
    ${__Node()}
    fragment _PublicConfig on PublicConfig {
        id,
        node { ..._Node },
        ipv4,
        ipv6,
        gw4,
        gw6,
        domain
    }`;
}

function __PublicConfigEdge() {
  return `
    ${__PublicConfig()}
    fragment _PublicConfigEdge on PublicConfigEdge {
        node { ..._PublicConfig },
        cursor
    }`;
}

function __PublicConfigsConnection() {
  return `
    ${__PublicConfigEdge()}
    ${__PageInfo()}
    fragment _PublicConfigsConnection on PublicConfigsConnection {
        edges { ..._PublicConfigEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __Location() {
  return `fragment _Location on Location {
            id,
    longitude,
    latitude
    }
  `;
}

function __LocationEdge() {
  return `
    ${__Location()}
    fragment _LocationEdge on LocationEdge {
        node { ..._Location },
        cursor
    }`;
}

function __LocationsConnection() {
  return `
    ${__LocationEdge()}
    ${__PageInfo()}
    fragment _LocationsConnection on LocationsConnection {
        edges { ..._LocationEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __PricingPolicy() {
  return `
    ${__Policy()}
    ${__Policy()}
    ${__Policy()}
    ${__Policy()}
    fragment _PricingPolicy on PricingPolicy {
        id,
        gridVersion,
        pricingPolicyID,
        name,
        su { ..._Policy },
        cu { ..._Policy },
        nu { ..._Policy },
        ipu { ..._Policy },
        foundationAccount,
        certifiedSalesAccount,
        dedicatedNodeDiscount
    }`;
}

function __PricingPolicyEdge() {
  return `
    ${__PricingPolicy()}
    fragment _PricingPolicyEdge on PricingPolicyEdge {
        node { ..._PricingPolicy },
        cursor
    }`;
}

function __PricingPoliciesConnection() {
  return `
    ${__PricingPolicyEdge()}
    ${__PageInfo()}
    fragment _PricingPoliciesConnection on PricingPoliciesConnection {
        edges { ..._PricingPolicyEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __Policy() {
  return `
    fragment _Policy on Policy {
        value,
        unit
    }`;
}

function __Country() {
  return `
    fragment _Country on Country {
        id,
        countryID,
        code,
        name,
        region,
        subregion,
        lat,
        long
    }`;
}

function __CountryEdge() {
  return `
    ${__Country()}
    fragment _CountryEdge on CountryEdge {
        node { ..._Country },
        cursor
    }`;
}

function __CountriesConnection() {
  return `
    ${__CountryEdge()}
    ${__PageInfo()}
    fragment _CountriesConnection on CountriesConnection {
        edges { ..._CountryEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __City() {
  return `
    fragment _City on City {
        id,
        cityID,
        countryID,
        name
    }
  `;
}

function __CityEdge() {
  return `
    ${__City()}
    fragment _CityEdge on CityEdge {
        node { ..._City },
        cursor
    }`;
}

function __CitiesConnection() {
  return `
    ${__CityEdge()}
    ${__PageInfo()}
    fragment _CitiesConnection on CitiesConnection {
        edges { ..._CityEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __NodeContract() {
  return `
  ${__ContractResources()}
    fragment _NodeContract on NodeContract {
        id,
        gridVersion,
        contractID,
        twinID,
        nodeID,
        deploymentData,
        deploymentHash,
        numberOfPublicIPs,
        state,
        resourcesUsed { ..._ContractResources },
        createdAt,
        solutionProviderID
    }
    `;
}

function __NodeContractEdge() {
  return `
    ${__NodeContract()}
    fragment _NodeContractEdge on NodeContractEdge {
        node { ..._NodeContract },
        cursor
    }`;
}

function __NodeContractsConnection() {
  return `
    ${__NodeContractEdge()}
    ${__PageInfo()}
    fragment _NodeContractsConnection on NodeContractsConnection {
        edges { ..._NodeContractEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __ContractResources() {
  return `
    ${__NodeContract()}
    fragment _ContractResources on ContractResources {
        id,
        contract { ..._NodeContract },
        hru,
        sru,
        cru,
        mru
    }`;
}

function __ContractResourcesEdge() {
  return `
    ${__ContractResources()}
    fragment _ContractResourcesEdge on ContractResourcesEdge {
        node { ..._ContractResources },
        cursor
    }`;
}

function __ContractResourcesConnection() {
  return `
    ${__ContractResourcesEdge()}
    ${__PageInfo()}
    fragment _ContractResourcesConnection on ContractResourcesConnection {
        edges { ..._ContractResourcesEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __NameContract() {
  return `
    fragment _NameContract on NameContract {
        id,
        gridVersion,
        contractID,
        twinID,
        name,
        state,
        createdAt,
        solutionProviderID
    }
  `;
}

function __NameContractEdge() {
  return `
    ${__NameContract()}
    fragment _NameContractEdge on NameContractEdge {
        node { ..._NameContract },
        cursor
    }`;
}

function __NameContractsConnection() {
  return `
    ${__NameContractEdge()}
    ${__PageInfo()}
    fragment _NameContractsConnection on NameContractsConnection {
        edges { ..._NameContractEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __RentContract() {
  return `
     
    fragment _RentContract on RentContract { 
        id,
        gridVersion,
        contractID,
        twinID,
        nodeID,
        state,
        createdAt,
        solutionProviderID
    }
    `;
}

function __RentContractEdge() {
  return `
    ${__RentContract()}
    fragment _RentContractEdge on RentContractEdge {
        node { ..._RentContract },
        cursor
    }`;
}

function __RentContractsConnection() {
  return `
    ${__RentContractEdge()}
    ${__PageInfo()}
    fragment _RentContractsConnection on RentContractsConnection {
        edges { ..._RentContractEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __SolutionProvider() {
  return `
    ${__Provider()}
    fragment _SolutionProvider on SolutionProvider {
        id,
        solutionProviderID,
        description,
        link,
        approved,
        providers { ..._Provider }
    }`;
}

function __SolutionProviderEdge() {
  return `
    ${__SolutionProvider()}
    fragment _SolutionProviderEdge on SolutionProviderEdge {
        node { ..._SolutionProvider },
        cursor
    }`;
}

function __SolutionProvidersConnection() {
  return `
    ${__SolutionProviderEdge()}
    ${__PageInfo()}
    fragment _SolutionProvidersConnection on SolutionProvidersConnection {
        edges { ..._SolutionProviderEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __Provider() {
  return `
    fragment _Provider on Provider {
        who,
        take
    }
  `;
}

function __NruConsumption() {
  return `
    fragment _NruConsumption on NruConsumption {
        id,
        contractID,
        timestamp,
        window,
        nru
    }
  `;
}

function __NruConsumptionEdge() {
  return `
    ${__NruConsumption()}
    fragment _NruConsumptionEdge on NruConsumptionEdge {
        node { ..._NruConsumption },
        cursor
    }`;
}

function __NruConsumptionsConnection() {
  return `
    ${__NruConsumptionEdge()}
    ${__PageInfo()}
    fragment _NruConsumptionsConnection on NruConsumptionsConnection {
        edges { ..._NruConsumptionEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __ContractBillReport() {
  return `
    fragment _ContractBillReport on ContractBillReport {
        id,
        contractID,
        discountReceived,
        amountBilled,
        timestamp
    }
  `;
}

function __ContractBillReportEdge() {
  return `
    ${__ContractBillReport()}
    fragment _ContractBillReportEdge on ContractBillReportEdge {
        node { ..._ContractBillReport },
        cursor
    }`;
}

function __ContractBillReportsConnection() {
  return `
    ${__ContractBillReportEdge()}
    ${__PageInfo()}
    fragment _ContractBillReportsConnection on ContractBillReportsConnection {
        edges { ..._ContractBillReportEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __FarmingPolicy() {
  return `
    fragment _FarmingPolicy on FarmingPolicy {
        id,
        gridVersion,
        farmingPolicyID,
        name,
        cu,
        su,
        nu,
        ipv4,
        minimalUptime,
        policyCreated,
        policyEnd,
        immutable,
        default,
        nodeCertification,
        farmCertification
    }
  `;
}

function __FarmingPolicyEdge() {
  return `
    ${__FarmingPolicy()}
    fragment _FarmingPolicyEdge on FarmingPolicyEdge {
        node { ..._FarmingPolicy },
        cursor
    }`;
}

function __FarmingPoliciesConnection() {
  return `
    ${__FarmingPolicyEdge()}
    ${__PageInfo()}
    fragment _FarmingPoliciesConnection on FarmingPoliciesConnection {
        edges { ..._FarmingPolicyEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __UptimeEvent() {
  return `
    fragment _UptimeEvent on UptimeEvent {
        id,
        nodeID,
        uptime,
        timestamp
    }
  `;
}

function __UptimeEventEdge() {
  return `
    ${__UptimeEvent()}
    fragment _UptimeEventEdge on UptimeEventEdge {
        node { ..._UptimeEvent },
        cursor
    }`;
}

function __UptimeEventsConnection() {
  return `
    ${__UptimeEventEdge()}
    ${__PageInfo()}
    fragment _UptimeEventsConnection on UptimeEventsConnection {
        edges { ..._UptimeEventEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __MintTransaction() {
  return `
    fragment _MintTransaction on MintTransaction {
        id,
        amount,
        target,
        block
    }
  `;
}

function __MintTransactionEdge() {
  return `
    ${__MintTransaction()}
    fragment _MintTransactionEdge on MintTransactionEdge {
        node { ..._MintTransaction },
        cursor
    }`;
}

function __MintTransactionsConnection() {
  return `
    ${__MintTransactionEdge()}
    ${__PageInfo()}
    fragment _MintTransactionsConnection on MintTransactionsConnection {
        edges { ..._MintTransactionEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __BurnTransaction() {
  return `
    fragment _BurnTransaction on BurnTransaction {
        id,
        block,
        amount,
        target
    }
  `;
}

function __BurnTransactionEdge() {
  return `
    ${__BurnTransaction()}
    fragment _BurnTransactionEdge on BurnTransactionEdge {
        node { ..._BurnTransaction },
        cursor
    }`;
}

function __BurnTransactionsConnection() {
  return `
    ${__BurnTransactionEdge()}
    ${__PageInfo()}
    fragment _BurnTransactionsConnection on BurnTransactionsConnection {
        edges { ..._BurnTransactionEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}

function __RefundTransaction() {
  return `
    fragment _RefundTransaction on RefundTransaction {
        id,
        block,
        amount,
        target,
        txHash
    }
  `;
}

function __RefundTransactionEdge() {
  return `
    ${__RefundTransaction()}
    fragment _RefundTransactionEdge on RefundTransactionEdge {
        node { ..._RefundTransaction },
        cursor
    }`;
}

function __RefundTransactionsConnection() {
  return `
    ${__RefundTransactionEdge()}
    ${__PageInfo()}
    fragment _RefundTransactionsConnection on RefundTransactionsConnection {
        edges { ..._RefundTransactionEdge },
        pageInfo { ..._PageInfo },
        totalCount
    }`;
}
