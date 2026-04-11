import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
//-----------------------------MAIN HOME PAGE -- START----------------------------------------------------------------
import MainNavbar from "./pages/MAIN/navbar";
import ProcurementHeader from "./pages/MAIN/cards";
import OpportunityFilter from "./pages/MAIN/filter";
import OpportunityTable from "./pages/MAIN/table";
import MainFooter from "./pages/MAIN/footer";
import Pricing from "./pages/MAIN/wallet";
import AboutUs from "./pages/MAIN/AboutUs";
import ForgotPassword from "./pages/MAIN/ForgotPassword";
//-----------------------------MAIN HOME PAGE-- END----------------------------------------------------------------

//-----------------------------BUYER-- START----------------------------------------------------------------
import BuyerSidebar from "./pages/Buyer/sidebar";
import BuyerDashboard from "./pages/Buyer/Dashboard";
import BuyerHeader from "./pages/Buyer/Navbar";
import BuyerViewSupplierResponses from "./pages/Buyer/ViewSupplierResponses";
import BuyerSpendDashboard from "./pages/Buyer/Analytics-page";
// import BuyerBanner from "./pages/Buyer/Buyerbanner";
import BuyerReportsDashboard from "./pages/Buyer/report-page";
import BuyerChatInterface from "./pages/Buyer/message-page";
import BuyerPurchaseRequestForm from "./pages/Buyer/requisition-create";
import BuyerPRTable from "./pages/Buyer/requisition-view";
import BuyerCreatePurchaseOrder from "./pages/Buyer/PurchaseOrder-create";
import BuyerPurchaseOrderVIEW from "./pages/Buyer/PurchaseOder-View";
import BuyerRFXcreate from "./pages/Buyer/Rfx-create";
import BuyerRFQView from "./pages/Buyer/RFX-view";
import BuyerSupplierDirectories from "./pages/Buyer/supplierDirectories";
import BuyerAddSupplierForm from "./pages/Buyer/AddSupplier";
// import BuyerCatalogPage from "./pages/Buyer/catlogLibrary";
// import BuyerAddItemForm from "./pages/Buyer/addCatalog";
// import BuyerBulkUploadPage from "./pages/Buyer/Bulk-catalog";
// import BuyerInactiveCatalogPage from "./pages/Buyer/inactive-catalog";
import BuyerCompanyProfile from "./pages/Buyer/company-information";
import BuyerUserRolesPage from "./pages/Buyer/User-team";
import BuyerAddUserRole from "./pages/Buyer/add-user";
import BuyerRegionalSettings from "./pages/Buyer/Regional-settings";
import BuyerPointOfContact from "./pages/Buyer/point-of-contact";
import BuyerOthers from "./pages/Buyer/others";
import BuyerAddCompanyForm from "./pages/Buyer/add-company";
import BuyerUserManagement from "./pages/Buyer/Users";
import BuyerCostCenterApp from "./pages/Buyer/CostCenters";
import BuyerSupplierTypesTable from "./pages/Buyer/supplierTypes";
import BuyerCostCenterDashboard from "./pages/Buyer/switch-costcenter";
import BuyerEmailSubscription from "./pages/Buyer/email";
import BuyerSupplierDashboard from "./pages/Buyer/supplier-questionnire";
import BuyerProfileBasic from "./pages/Buyer/basic-profile";
import BuyerBidSettingsPage from "./pages/Buyer/BidSettings";
import BuyerPurchaseOrderDefault from "./pages/Buyer/PurchaseOderDefault";
import BuyerPOApprovalWorkflow from "./pages/Buyer/PurchaseoDERaPPROVAL";
import BuyerAddCostCenter from "./pages/Buyer/Add-costCenter";
import BuyerBulkUploadCostPage from "./pages/Buyer/Bulk-cost";
import BuyerQuestionnaireResponse from "./pages/Buyer/Questionnier";
import BuyerCreateNewQuestionnire from "./pages/Buyer/Create-Questionnier";
import BuyerInternalApproval from "./pages/Buyer/Internal approval";
import BuyerHome from "./pages/Buyer/BuyerHome";
//--------------------------------BUYER END----------------------------------------------------------------

//------------------------------------SELLER-- START----------------------------------------------------------------
import Sidebar from "./pages/Seller/Sidebar";
import Navbar from "./pages/Seller/Navbar";
import Dashboard from "./pages/Seller/Dashboard";
import RFXbought from "./pages/Seller/RFX-bought";
import Quotations from "./pages/Seller/Qutotations";
import OrderReceived from "./pages/Seller/Oder-received";
import CreateQuote from "./pages/Seller/CreateQuote";
import CompanyProfile from "./pages/Seller/company-information";
import ProfileBasic from "./pages/Seller/basic-profile";
import RegionSettings from "./pages/Seller/RegionSettings";
import CreateProposal from "./pages/Seller/CreateProposal";
import PointOfContact from "./pages/Seller/PointOfContact";
import Others from "./pages/Seller/Others";
import UserRoles from "./pages/Seller/UserRoles";
import AddUserRole from "./pages/Seller/AddUser";
import UserManagement from "./pages/Seller/Users";
// import CatalogPage from "./pages/Seller/catalog";
// import AddItemForm from "./pages/Seller/AddCatalog";
// import InactiveCatalog from "./pages/Seller/InactiveCatalog";
// import BulkUpload from "./pages/Seller/BulkUplooad";
import CustomerTypesTable from "./pages/Seller/CustomerTypes";
import CustomerDirectory from "./pages/Seller/CustomDirectory";
import EmailSubscription from "./pages/Seller/EmailSubscription";
import ReceivedQuestions from "./pages/Seller/ReceivedQuestions";
import WalletHome from "./pages/Seller/Wallet-Home";
import WalletTransactions from "./pages/Seller/WalletTransation";
// import SellerBanner from "./pages/Seller/SellerBanner";
import SellerHome from "./pages/Seller/Home";  
import SellerChatInterface from "./pages/Seller/seller-message-page";
//------------------------------------------------SELLER END------------------------------------------------------------


/* ================= MAIN HOME PAGE ================= */

function Home() {
  const isLoggedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/buyer/dashboard");
    }
  }, [isLoggedIn, navigate]);

  if (isLoggedIn) return null;

  return (
    <>
      <MainNavbar />
      <ProcurementHeader />
      <OpportunityFilter />
      <OpportunityTable />
      <MainFooter />
     </>
  );
}

/* ================= BUYER LAYOUT ================= */

function BuyerLayout() {
  const isLoggedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) return null;

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f9fa] font-sans text-gray-900">
      <BuyerSidebar />

      <div className="flex-1 flex flex-col min-w-0 ml-[85px] h-screen">
        <BuyerHeader />

        <div className="flex-1 overflow-y-auto">
          {/* <BuyerBanner /> */}

         <Routes>

  <Route path="/" element={<Navigate to="dashboard" replace />} />
  <Route path="home" element={<BuyerHome />} />

  <Route path="dashboard" element={<BuyerDashboard />} />
  <Route path="supplier-responses" element={<BuyerViewSupplierResponses />} />
  <Route path="Analytics-page" element={<BuyerSpendDashboard />} />
  <Route path="report-page" element={<BuyerReportsDashboard />} />
  <Route path="message-page" element={<BuyerChatInterface />} />

  <Route path="create-requisition" element={<BuyerPurchaseRequestForm />} />
  <Route path="view-requisition" element={<BuyerPRTable />} />

  <Route path="create-purchaseOrder" element={<BuyerCreatePurchaseOrder />} />
  <Route path="view-purchaseOrder" element={<BuyerPurchaseOrderVIEW />} />

  <Route path="create-rfx" element={<BuyerRFXcreate />} />
  <Route path="view-rfx" element={<BuyerRFQView />} />

  <Route path="supplierDirectories" element={<BuyerSupplierDirectories />} />
  <Route path="add-supplier" element={<BuyerAddSupplierForm />} />

  {/* <Route path="catlog-Library" element={<BuyerCatalogPage />} />
  <Route path="add-catalog" element={<BuyerAddItemForm />} />
  <Route path="bulk-catalog" element={<BuyerBulkUploadPage />} />
  <Route path="inactive-catalog" element={<BuyerInactiveCatalogPage />} /> */}

  <Route path="company-information" element={<BuyerCompanyProfile />} />
  <Route path="user-teams" element={<BuyerUserRolesPage />} />
  <Route path="add-user" element={<BuyerAddUserRole />} />

  <Route path="regional-settings" element={<BuyerRegionalSettings />} />
  <Route path="points-contact" element={<BuyerPointOfContact />} />
  <Route path="others" element={<BuyerOthers />} />
  <Route path="add-company" element={<BuyerAddCompanyForm />} />
  <Route path="users" element={<BuyerUserManagement />} />

  <Route path="cost-centers" element={<BuyerCostCenterApp />} />
  <Route path="supplier-types" element={<BuyerSupplierTypesTable />} />
  <Route path="switch-costcenter" element={<BuyerCostCenterDashboard />} />
  <Route path="email-subscription" element={<BuyerEmailSubscription />} />
  <Route path="supplier-questionnaire" element={<BuyerSupplierDashboard />} />

  <Route path="profile-basic" element={<BuyerProfileBasic />} />

  <Route path="bid-settings" element={<BuyerBidSettingsPage />} />
  <Route path="purchase-order-default" element={<BuyerPurchaseOrderDefault />} />
  <Route path="purchase-order-workflow" element={<BuyerPOApprovalWorkflow />} />

  <Route path="add-costcenter" element={<BuyerAddCostCenter />} />
  <Route path="bulk-costcenter" element={<BuyerBulkUploadCostPage />} />

  <Route path="questionnaire-response" element={<BuyerQuestionnaireResponse />} />
  <Route path="create-questionnaire" element={<BuyerCreateNewQuestionnire />} />

  <Route path="internal-approval" element={<BuyerInternalApproval />} />
  <Route path="footer" element={<Footer />} />

</Routes>

        </div>
      </div>
    </div>
  );
}


/* ================= SELLER LAYOUT ================= */

function SellerLayout() {
  const isLoggedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen bg-[#F5F2EA] font-sans antialiased flex">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        
        <main className="mt-16 ml-20 flex-1 p-4">
          
           {/* <SellerBanner /> */}
           
          <Routes>
{/* Redirect /seller to /seller/home */}
            <Route path="/" element={<Navigate to="home" replace />} />
            
            {/* The Home Component Connection */}
            <Route path="home" element={<SellerHome />} />            <Route path="dashboard" element={<Dashboard />} />
            <Route path="rfx-bought" element={<RFXbought />} />
            <Route path="quotations" element={<Quotations />} />
            <Route path="/orders" element={<OrderReceived />} />
            <Route path="/create-quote" element={<CreateQuote />} />

           <Route path="company-information" element={<CompanyProfile />} />
<Route path="profile-basic" element={<ProfileBasic />} />
<Route path="region-settings" element={<RegionSettings />} />
<Route path="create-proposal" element={<CreateProposal />} />
<Route path="point-of-contact" element={<PointOfContact />} />
<Route path="others" element={<Others />} />

<Route path="users-Roles" element={<UserRoles />} />
<Route path="users/add-roles" element={<AddUserRole />} />
<Route path="users/list" element={<UserManagement />} />

{/* <Route path="catalog" element={<CatalogPage />} />
<Route path="add-catalog" element={<AddItemForm />} />
<Route path="inactive-catalog" element={<InactiveCatalog />} />
<Route path="bulk-catalog" element={<BulkUpload />} /> */}

<Route path="customer-types" element={<CustomerTypesTable />} />
<Route path="customer-directory" element={<CustomerDirectory />} />
<Route path="email-subscriptions" element={<EmailSubscription />} />
<Route path="received-questions" element={<ReceivedQuestions />} />

<Route path="wallet-home" element={<WalletHome />} />
<Route path="wallet-transactions" element={<WalletTransactions />} />
<Route path="message-page" element={<SellerChatInterface />} />
          </Routes>

        </main>
      </div>
    </div>
  );
}


/* ================= MAIN APP ================= */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/buyer/*" element={<BuyerLayout />} />
        <Route path="/seller/*" element={<SellerLayout />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;