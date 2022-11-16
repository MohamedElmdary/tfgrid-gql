import {
  Account,
  BurnTransaction,
  City,
  ContractBillReport,
  ContractResources,
  Country,
  EntityProof,
  Farm,
  FarmingPolicy,
  HistoricalBalance,
  Interfaces,
  MintTransaction,
  NameContract,
  Node,
  NodeContract,
  NodeResourcesTotal,
  NruConsumption,
  PartialBoolean,
  PricingPolicy,
  PublicConfig,
  PublicIp,
  RefundTransaction,
  RentContract,
  SolutionProvider,
  Transfer,
  Twin,
  UptimeEvent,
  BaseWhere,
  StringWhere,
  ArrayWhere,
  Int,
  NullWhere,
  BigInt,
  EnumWhere,
  NodeCertification,
  BoolWhere,
  AbstractWhere,
  DiscountLevel,
  FarmCertification,
  ContractState,
} from "../types";
import { ByArray } from "./abstract_client";

export const LIST_QUERIES = {
  Node: "nodes",
  Account: "accounts",
  BurnTransaction: "burnTransactions",
  City: "cities",
  ContractBillReport: "contractBillReports",
  ContractResources: "contractResources",
  Country: "countries",
  EntityProof: "entityProofs",
  FarmingPolicy: "farmingPolicies",
  Farm: "farms",
  HistoricalBalance: "historicalBalances",
  Interfaces: "interfaces",
  Location: "locations",
  MintTransaction: "mintTransactions",
  NameContract: "nameContracts",
  NodeContract: "nodeContracts",
  NodeResourcesTotal: "nodeResourcesTotals",
  NruConsumption: "nruConsumptions",
  PricingPolicy: "pricingPolicies",
  PublicConfig: "publicConfigs",
  PublicIp: "publicIps",
  RefundTransaction: "refundTransactions",
  RentContract: "rentContracts",
  SolutionProvider: "solutionProviders",
  Transfer: "transfers",
  Twin: "twins",
  UptimeEvent: "uptimeEvents",
} as const;

// prettier-ignore
interface OrderBy {
    Account: "id" | "wallet" | "balance";
    HistoricalBalance: "id" | "account_id" | "account_wallet" | "account_balance" | "balance" | "timestamp";
    Transfer: "id" | "from" | "to" | "amount" | "timestamp";
    Entity: "id" | "gridVersion" | "entityID" | "name" | "country" | "city" | "accountID";
    Twin: "id" | "gridVersion" | "twinID" | "accountID" | "ip";
    EntityProof: "id" | "entityID" | "signature" | "twinRel_id" | "twinRel_gridVersion" | "twinRel_twinID" | "twinRel_accountID" | "twinRel_ip";
    Farm: "id" | "gridVersion" | "farmID" | "name" | "twinID" | "pricingPolicyID" | "certification" | "stellarAddress" | "dedicatedFarm";
    PublicIp: "id" | "farm_id" | "farm_gridVersion" | "farm_farmID" | "farm_name" | "farm_twinID" | "farm_pricingPolicyID" | "farm_certification" | "farm_stellarAddress" | "farm_dedicatedFarm" | "gateway" | "ip" | "contractId";
    Node: "id" | "gridVersion" | "nodeID" | "farmID" | "twinID" | "location_id" | "location_longitude" | "location_latitude" | "country" | "city" | "publicConfig_id" | "publicConfig_ipv4" | "publicConfig_ipv6" | "publicConfig_gw4" | "publicConfig_gw6" | "publicConfig_domain" | "resourcesTotal_id" | "resourcesTotal_hru" | "resourcesTotal_sru" | "resourcesTotal_cru" | "resourcesTotal_mru" | "uptime" | "created" | "farmingPolicyId" | "certification" | "secure" | "virtualized" | "serialNumber" | "createdAt" | "updatedAt" | "connectionPrice";
    NodeResourcesTotal: "id" | "node_id" | "node_gridVersion" | "node_nodeID" | "node_farmID" | "node_twinID" | "node_country" | "node_city" | "node_uptime" | "node_created" | "node_farmingPolicyId" | "node_certification" | "node_secure" | "node_virtualized" | "node_serialNumber" | "node_createdAt" | "node_updatedAt" | "node_connectionPrice" | "hru" | "sru" | "cru" | "mru";
    Interfaces: "id" | "node_id" | "node_gridVersion" | "node_nodeID" | "node_farmID" | "node_twinID" | "node_country" | "node_city" | "node_uptime" | "node_created" | "node_farmingPolicyId" | "node_certification" | "node_secure" | "node_virtualized" | "node_serialNumber" | "node_createdAt" | "node_updatedAt" | "node_connectionPrice" | "name" | "mac" | "ips";
    PublicConfig: "id" | "node_id" | "node_gridVersion" | "node_nodeID" | "node_farmID" | "node_twinID" | "node_country" | "node_city" | "node_uptime" | "node_created" | "node_farmingPolicyId" | "node_certification" | "node_secure" | "node_virtualized" | "node_serialNumber" | "node_createdAt" | "node_updatedAt" | "node_connectionPrice" | "ipv4" | "ipv6" | "gw4" | "gw6" | "domain";
    Location: "id" | "longitude" | "latitude";
    PricingPolicy: "id" | "gridVersion" | "pricingPolicyID" | "name" | "su_value" | "su_unit" | "cu_value" | "cu_unit" | "nu_value" | "nu_unit" | "ipu_value" | "ipu_unit" | "foundationAccount" | "certifiedSalesAccount" | "dedicatedNodeDiscount";
    Country: "id" | "countryID" | "code" | "name" | "region" | "subregion" | "lat" | "long";
    City: "id" | "cityID" | "countryID" | "name";
    NodeContract: "id" | "gridVersion" | "contractID" | "twinID" | "nodeID" | "deploymentData" | "deploymentHash" | "numberOfPublicIPs" | "state" | "resourcesUsed_id" | "resourcesUsed_hru" | "resourcesUsed_sru" | "resourcesUsed_cru" | "resourcesUsed_mru" | "createdAt" | "solutionProviderID";
    ContractResources: "id" | "contract_id" | "contract_gridVersion" | "contract_contractID" | "contract_twinID" | "contract_nodeID" | "contract_deploymentData" | "contract_deploymentHash" | "contract_numberOfPublicIPs" | "contract_state" | "contract_createdAt" | "contract_solutionProviderID" | "hru" | "sru" | "cru" | "mru";
    NameContract: "id" | "gridVersion" | "contractID" | "twinID" | "name" | "state" | "createdAt" | "solutionProviderID";
    RentContract: "id" | "gridVersion" | "contractID" | "twinID" | "nodeID" | "state" | "createdAt" | "solutionProviderID";
    SolutionProvider: "id" | "solutionProviderID" | "description" | "link" | "approved";
    NruConsumption: "id" | "contractID" | "timestamp" | "window" | "nru";
    ContractBillReport: "id" | "contractID" | "discountReceived" | "amountBilled" | "timestamp";
    FarmingPolicy: "id" | "gridVersion" | "farmingPolicyID" | "name" | "cu" | "su" | "nu" | "ipv4" | "minimalUptime" | "policyCreated" | "policyEnd" | "immutable" | "default" | "nodeCertification" | "farmCertification";
    UptimeEvent: "id" | "nodeID" | "uptime" | "timestamp";
    MintTransaction: "id" | "amount" | "target" | "block";
    BurnTransaction: "id" | "block" | "amount" | "target";
    RefundTransaction: "id" | "block" | "amount" | "target" | "txHash";
}

// prettier-ignore
interface _W {
    Node: 
        BaseWhere<"gridVersion" |"nodeID" |"farmID" |"twinID" |"created" |"farmingPolicyId" | "connectionPrice", Int> &
        BaseWhere<"uptime" | "createdAt" | "updatedAt", BigInt> &
        StringWhere<"id" | "country" | "city" | "serialNumber"> &
        NullWhere<"country" | "city" | "uptime" | "certification" | "secure" | "virtualized" | "serialNumber" | "connectionPrice"> &
        ArrayWhere<"interfaces", Where["Interfaces"]> &
        EnumWhere<"certification", NodeCertification> &
        BoolWhere<"secure" | "virtualized"> &
        { location?: Where["Location"]; publicConfig?: Where["PublicConfig"]; resourcesTotal?: Where["NodeResourcesTotal"]; };

    Account:
        StringWhere<"id" | "wallet"> &
        BaseWhere<"balance", BigInt> &
        ArrayWhere<"historicalBalances", Where["HistoricalBalance"]>;

    BurnTransaction:
        StringWhere<"id" | "target"> &
        BaseWhere<"block", Int> &
        BaseWhere<"amount", BigInt>;

    City:
        StringWhere<"id" | "name"> &
        BaseWhere<"cityID" | "countryID", Int>;

    ContractBillReport:
        StringWhere<"id"> &
        BaseWhere<"contractID" | "amountBilled" | "timestamp", BigInt> &
        EnumWhere<"discountReceived", DiscountLevel>;

    ContractResources:
        StringWhere<"id"> &
        BaseWhere<"hru" | "src" | "cru" | "mru", BigInt> &
        { contract?: Where["NodeContract"]; };

    Country:
        StringWhere<"id" | "code" | "name" | "region" | "subregion" | "lat" | "long"> &
        BaseWhere<"countryID", Int> &
        NullWhere<"lat" | "long">;

    EntityProof:
        StringWhere<"id" | "signature"> &
        BaseWhere<"entityID", Int> &
        { twinRel?: Where["Twin"] };

    FarmingPolicy:
        StringWhere<"id" | "name"> &
        BaseWhere<"gridVersion" | "farmingPolicyID" | "cu" | "su" | "nu" | "ipv4" | "minimalUptime" | "policyCreated" | "policyEnd", Int> &
        NullWhere<"name" | "cu" | "su" | "nu" | "ipv4" | "minimalUptime" | "policyCreated" | "policyEnd" | "immutable" | "default" | "nodeCertification" | "armCertification"> & 
        BoolWhere<"immutable" | "default"> &
        EnumWhere<"nodeCertification", NodeCertification> &
        EnumWhere<"farmCertification", FarmCertification>;

    Farm:
        StringWhere<"id" | "name" | "stellarAddress"> &
        BaseWhere<"gridVersion" | "farmID" | "twinID" | "pricingPolicyID", Int> &
        NullWhere<"certification" | "stellarAddress" | "dedicatedFarm"> &
        ArrayWhere<"publicIPs", Where["PublicIp"]> &
        BoolWhere<"dedicatedFarm"> &
        EnumWhere<"certification", FarmCertification>;

    HistoricalBalance:
        StringWhere<"id"> &
        BaseWhere<"balance" | "timestamp", BigInt> &
        { account?: Where["Account"] };

    Interfaces:
        StringWhere<"id" | "name" | "mac" | "ips"> &
        { node?: Where["Node"] };

    Location: StringWhere<"id" | "longitude" | "latitude">;

    MintTransaction:
        StringWhere<"id" | "target"> &
        BaseWhere<"amount", BigInt> &
        BaseWhere<"block", Int>;

    NameContract:
        StringWhere<"id" | "name"> &
        BaseWhere<"gridVersion" | "twinID", Int> &
        BaseWhere<"contractID", BigInt> &
        EnumWhere<"state", ContractState>;

    NodeContract:
        StringWhere<"id" | "deploymentData" | "deploymentHash"> &
        BaseWhere<"gridVersion" | "twinID" | "nodeID" | "numberOfPublicIPs" | "solutionProviderID", Int> &
        BaseWhere<"contractID" | "createdAt", BigInt> &
        EnumWhere<"state", ContractState> &
        NullWhere<"resourcesUsed" | "solutionProviderID"> &
        { resourcesUsed?: Where["ContractResources"] };

    NodeResourcesTotal:
        StringWhere<"id"> &
        BaseWhere<"hru" | "sru" | "cru" | "mru", BigInt> &
        { node?: Where["Node"] };

    NruConsumption:
        StringWhere<"id"> &
        BaseWhere<"contractID" | "timestamp" | "window" | "nru", BigInt> &
        NullWhere<"window" | "nru">;

    PricingPolicy:
        StringWhere<"id" | "name" | "foundationAccount" | "certifiedSalesAccount"> &
        BaseWhere<"gridVersion" | "pricingPolicyID" | "dedicatedNodeDiscount", Int> &
        { su?: Where["PricingPolicy"], cu?: Where["PricingPolicy"], nu?: Where["PricingPolicy"], ipu?: Where["PricingPolicy"] };

    PublicConfig:
        StringWhere<"id" | "ipv4" | "ipv6" | "gw4" | "gw6" | "domain"> &
        NullWhere<"ipv4" | "ipv6" | "gw4" | "gw6" | "domain"> &
        { node?: Where["Node"] };

    PublicIp:
        StringWhere<"id" | "gateway" | "ip"> &
        BaseWhere<"contractId", BigInt> &
        { farm?: Where["Farm"] };
    
    RefundTransaction:
        StringWhere<"id" | "target" | "txHash"> &
        BaseWhere<"block", Int> &
        BaseWhere<"amount", BigInt>;

    RentContract:
        StringWhere<"id"> &
        BaseWhere<"gridVersion" | "twinID" | "nodeID" | "solutionProviderID", Int> &
        BaseWhere<"contractID" | "createdAt", BigInt> &
        EnumWhere<"state", ContractState> &
        NullWhere<"solutionProviderID">;

    SolutionProvider:
        StringWhere<"id" | "description" | "link"> &
        BaseWhere<"solutionProviderID", BigInt> &
        BoolWhere<"approved"> &
        NullWhere<"providers">;

    Transfer:
        StringWhere<"id" | "from" | "to"> &
        BaseWhere<"amount" | "timestamp", BigInt>;

    Twin:
        StringWhere<"id" | "accountID" | "ip"> &
        BaseWhere<"gridVersion" | "twinID", Int>;
    
    UptimeEvent:
        StringWhere<"id"> &
        BaseWhere<"nodeID", Int> &
        BaseWhere<"uptime" | "timestamp", BigInt>;
}

interface Where {
  Node: AbstractWhere<_W["Node"]>;
  Account: AbstractWhere<_W["Account"]>;
  BurnTransaction: AbstractWhere<_W["BurnTransaction"]>;
  City: AbstractWhere<_W["City"]>;
  ContractBillReport: AbstractWhere<_W["ContractBillReport"]>;
  ContractResources: AbstractWhere<_W["ContractResources"]>;
  Country: AbstractWhere<_W["Country"]>;
  EntityProof: AbstractWhere<_W["EntityProof"]>;
  FarmingPolicy: AbstractWhere<_W["FarmingPolicy"]>;
  Farm: AbstractWhere<_W["Farm"]>;
  HistoricalBalance: AbstractWhere<_W["HistoricalBalance"]>;
  Interfaces: AbstractWhere<_W["Interfaces"]>;
  Location: AbstractWhere<_W["Location"]>;
  MintTransaction: AbstractWhere<_W["MintTransaction"]>;
  NameContract: AbstractWhere<_W["NameContract"]>;
  NodeContract: AbstractWhere<_W["NodeContract"]>;
  NodeResourcesTotal: AbstractWhere<_W["NodeResourcesTotal"]>;
  NruConsumption: AbstractWhere<_W["NruConsumption"]>;
  PricingPolicy: AbstractWhere<_W["PricingPolicy"]>;
  PublicConfig: AbstractWhere<_W["PublicConfig"]>;
  PublicIp: AbstractWhere<_W["PublicIp"]>;
  RefundTransaction: AbstractWhere<_W["RefundTransaction"]>;
  RentContract: AbstractWhere<_W["RentContract"]>;
  SolutionProvider: AbstractWhere<_W["SolutionProvider"]>;
  Transfer: AbstractWhere<_W["Transfer"]>;
  Twin: AbstractWhere<_W["Twin"]>;
  UptimeEvent: AbstractWhere<_W["UptimeEvent"]>;
}

// prettier-ignore
export interface ListQueries {
  nodes(fields: PartialBoolean<Node>, options?: ByArray<OrderBy["Node"], Where["Node"]>): Promise<Node[]>;
  accounts(fields: PartialBoolean<Account>,options?: ByArray<OrderBy["Account"], Where["Account"]>): Promise<Account[]>;
  burnTransactions(fields: PartialBoolean<BurnTransaction>,options?: ByArray<OrderBy["BurnTransaction"], Where["BurnTransaction"]>): Promise<BurnTransaction[]>;
  cities(fields: PartialBoolean<City>, options?: ByArray<OrderBy["City"], Where["City"]>): Promise<City[]>;
  contractBillReports(fields: PartialBoolean<ContractBillReport>,options?: ByArray<OrderBy["ContractBillReport"], Where["ContractBillReport"]>): Promise<ContractBillReport[]>;
  contractResources(fields: PartialBoolean<ContractResources>,options?: ByArray<OrderBy["ContractResources"], Where["ContractResources"]>): Promise<ContractResources[]>;
  countries(fields: PartialBoolean<Country>,options?: ByArray<OrderBy["Country"], Where["Country"]>): Promise<Country[]>;
  entityProofs(fields: PartialBoolean<EntityProof>,options?: ByArray<OrderBy["EntityProof"], Where["EntityProof"]>): Promise<EntityProof[]>;
  farmingPolicies(fields: PartialBoolean<FarmingPolicy>,options?: ByArray<OrderBy["FarmingPolicy"], Where["FarmingPolicy"]>): Promise<FarmingPolicy[]>;
  farms(fields: PartialBoolean<Farm>, options?: ByArray<OrderBy["Farm"], Where["Farm"]>): Promise<Farm[]>;
  historicalBalances(fields: PartialBoolean<HistoricalBalance>,options?: ByArray<OrderBy["HistoricalBalance"], Where["HistoricalBalance"]>): Promise<HistoricalBalance[]>;
  interfaces(fields: PartialBoolean<Interfaces>,options?: ByArray<OrderBy["Interfaces"], Where["Interfaces"]>): Promise<Interfaces[]>;
  locations(fields: PartialBoolean<Location>,options?: ByArray<OrderBy["Location"], Where["Location"]>): Promise<Location[]>;
  mintTransactions(fields: PartialBoolean<MintTransaction>,options?: ByArray<OrderBy["MintTransaction"], Where["MintTransaction"]>): Promise<MintTransaction[]>;
  nameContracts(fields: PartialBoolean<NameContract>,options?: ByArray<OrderBy["NameContract"], Where["NameContract"]>): Promise<NameContract[]>;
  nodeContracts(fields: PartialBoolean<NodeContract>,options?: ByArray<OrderBy["NodeContract"], Where["NodeContract"]>): Promise<NodeContract[]>;
  nodeResourcesTotals(fields: PartialBoolean<NodeResourcesTotal>,options?: ByArray<OrderBy["NodeResourcesTotal"], Where["NodeResourcesTotal"]>): Promise<NodeResourcesTotal[]>;
  nruConsumptions(fields: PartialBoolean<NruConsumption>,options?: ByArray<OrderBy["NruConsumption"], Where["NruConsumption"]>): Promise<NruConsumption[]>;
  pricingPolicies(fields: PartialBoolean<PricingPolicy>,options?: ByArray<OrderBy["PricingPolicy"], Where["PricingPolicy"]>): Promise<PricingPolicy[]>;
  publicConfigs(fields: PartialBoolean<PublicConfig>,options?: ByArray<OrderBy["PublicConfig"], Where["PublicConfig"]>): Promise<PublicConfig[]>;
  publicIps(fields: PartialBoolean<PublicIp>,options?: ByArray<OrderBy["PublicIp"], Where["PublicIp"]>): Promise<PublicIp[]>;
  refundTransactions(fields: PartialBoolean<RefundTransaction>,options?: ByArray<OrderBy["RefundTransaction"], Where["RefundTransaction"]>): Promise<RefundTransaction[]>;
  rentContracts(fields: PartialBoolean<RentContract>,options?: ByArray<OrderBy["RentContract"], Where["RentContract"]>): Promise<RentContract[]>;
  solutionProviders(fields: PartialBoolean<SolutionProvider>,options?: ByArray<OrderBy["SolutionProvider"], Where["SolutionProvider"]>): Promise<SolutionProvider[]>;
  transfers(fields: PartialBoolean<Transfer>,options?: ByArray<OrderBy["Transfer"], Where["Transfer"]>): Promise<Transfer[]>;
  twins(fields: PartialBoolean<Twin>, options?: ByArray<OrderBy["Twin"], Where["Twin"]>): Promise<Twin[]>;
  uptimeEvents(fields: PartialBoolean<UptimeEvent>,options?: ByArray<OrderBy["UptimeEvent"], Where["UptimeEvent"]>): Promise<UptimeEvent[]>;
}
