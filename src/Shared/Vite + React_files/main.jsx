import.meta.env = {"BASE_URL": "/", "DEV": true, "MODE": "development", "PROD": false, "SSR": false, "VITE_CLERK_PUBLISHABLE_KEY": "pk_test_Y29tbXVuYWwtZ29yaWxsYS04MS5jbGVyay5hY2NvdW50cy5kZXYk"};import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=8dd8c6c4"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=8dd8c6c4"; const StrictMode = __vite__cjsImport1_react["StrictMode"];
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=8dd8c6c4"; const createRoot = __vite__cjsImport2_reactDom_client["createRoot"];
import "/src/index.css?t=1735036696676";
import { RouterProvider, createBrowserRouter } from "/node_modules/.vite/deps/react-router-dom.js?v=8dd8c6c4";
import Home from "/src/home.jsx?t=1735035973677";
import Contact from "/src/contact.jsx";
import { ClerkProvider } from "/node_modules/.vite/deps/@clerk_clerk-react.js?v=8dd8c6c4";
import Profile from "/src/profile/index.jsx?t=1735035973677";
import AddListing from "/src/add-listing/index.jsx?t=1735036696676";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
        fileName: "/Users/minmin/car-management/car-marketplace/src/main.jsx",
        lineNumber: 14,
        columnNumber: 12
      }, this)
    },
    {
      path: "/contact",
      element: /* @__PURE__ */ jsxDEV(Contact, {}, void 0, false, {
        fileName: "/Users/minmin/car-management/car-marketplace/src/main.jsx",
        lineNumber: 18,
        columnNumber: 12
      }, this)
    },
    {
      path: "/profile",
      element: /* @__PURE__ */ jsxDEV(Profile, {}, void 0, false, {
        fileName: "/Users/minmin/car-management/car-marketplace/src/main.jsx",
        lineNumber: 22,
        columnNumber: 12
      }, this)
    },
    {
      path: "/add-listing",
      element: /* @__PURE__ */ jsxDEV(AddListing, {}, void 0, false, {
        fileName: "/Users/minmin/car-management/car-marketplace/src/main.jsx",
        lineNumber: 26,
        columnNumber: 12
      }, this)
    }
  ]
);
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(StrictMode, { children: /* @__PURE__ */ jsxDEV(ClerkProvider, { publishableKey: PUBLISHABLE_KEY, afterSignOutUrl: "/", children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "/Users/minmin/car-management/car-marketplace/src/main.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "/Users/minmin/car-management/car-marketplace/src/main.jsx",
    lineNumber: 40,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/Users/minmin/car-management/car-marketplace/src/main.jsx",
    lineNumber: 39,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBYWE7QUFiYixTQUFTQSxrQkFBa0I7QUFDM0IsU0FBU0Msa0JBQWtCO0FBQzNCLE9BQU87QUFDUCxTQUFTQyxnQkFBZ0JDLDJCQUEyQjtBQUNwRCxPQUFPQyxVQUFVO0FBQ2pCLE9BQU9DLGFBQWE7QUFDcEIsU0FBU0MscUJBQXFCO0FBQzlCLE9BQU9DLGFBQWE7QUFDcEIsT0FBT0MsZ0JBQWdCO0FBRXZCLE1BQU1DLFNBQU9OO0FBQUFBLEVBQW9CO0FBQUEsSUFDL0I7QUFBQSxNQUNFTyxNQUFNO0FBQUEsTUFDTkMsU0FBUyx1QkFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSztBQUFBLElBQ2hCO0FBQUEsSUFDQTtBQUFBLE1BQ0FELE1BQUs7QUFBQSxNQUNMQyxTQUFTLHVCQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFRO0FBQUEsSUFDbkI7QUFBQSxJQUNBO0FBQUEsTUFDRUQsTUFBSztBQUFBLE1BQ0xDLFNBQVMsdUJBQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVE7QUFBQSxJQUNuQjtBQUFBLElBQ0E7QUFBQSxNQUNFRCxNQUFLO0FBQUEsTUFDTEMsU0FBUyx1QkFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVc7QUFBQSxJQUN0QjtBQUFBLEVBQUM7QUFHQTtBQUVELE1BQU1DLGtCQUFrQkMsWUFBWUMsSUFBSUM7QUFFeEMsSUFBSSxDQUFDSCxpQkFBaUI7QUFDcEIsUUFBTSxJQUFJSSxNQUFNLHlCQUF5QjtBQUMzQztBQUVBZixXQUFXZ0IsU0FBU0MsZUFBZSxNQUFNLENBQUMsRUFBRUM7QUFBQUEsRUFDMUMsdUJBQUMsY0FDRyxpQ0FBQyxpQkFBYyxnQkFBZ0JQLGlCQUFpQixpQkFBZ0IsS0FDbEUsaUNBQUMsa0JBQWUsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUErQixLQUQ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUYsS0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUE7QUFDRiIsIm5hbWVzIjpbIlN0cmljdE1vZGUiLCJjcmVhdGVSb290IiwiUm91dGVyUHJvdmlkZXIiLCJjcmVhdGVCcm93c2VyUm91dGVyIiwiSG9tZSIsIkNvbnRhY3QiLCJDbGVya1Byb3ZpZGVyIiwiUHJvZmlsZSIsIkFkZExpc3RpbmciLCJyb3V0ZXIiLCJwYXRoIiwiZWxlbWVudCIsIlBVQkxJU0hBQkxFX0tFWSIsImltcG9ydCIsImVudiIsIlZJVEVfQ0xFUktfUFVCTElTSEFCTEVfS0VZIiwiRXJyb3IiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIm1haW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmljdE1vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50J1xuaW1wb3J0ICcuL2luZGV4LmNzcydcbmltcG9ydCB7IFJvdXRlclByb3ZpZGVyLCBjcmVhdGVCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBIb21lIGZyb20gJy4vaG9tZSdcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29udGFjdCdcbmltcG9ydCB7IENsZXJrUHJvdmlkZXIgfSBmcm9tICdAY2xlcmsvY2xlcmstcmVhY3QnXG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuL3Byb2ZpbGUnXG5pbXBvcnQgQWRkTGlzdGluZyBmcm9tICcuL2FkZC1saXN0aW5nJ1xuXG5jb25zdCByb3V0ZXI9Y3JlYXRlQnJvd3NlclJvdXRlcihbXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgZWxlbWVudDogPEhvbWUgLz5cbiAgfSwgXG4gIHtcbiAgcGF0aDonL2NvbnRhY3QnLFxuICBlbGVtZW50OiA8Q29udGFjdCAvPlxufSwgXG57XG4gIHBhdGg6Jy9wcm9maWxlJyxcbiAgZWxlbWVudDogPFByb2ZpbGUgLz5cbn0sIFxue1xuICBwYXRoOicvYWRkLWxpc3RpbmcnLFxuICBlbGVtZW50OiA8QWRkTGlzdGluZyAvPlxufVxuXG5cbl0pXG5cbmNvbnN0IFBVQkxJU0hBQkxFX0tFWSA9IGltcG9ydC5tZXRhLmVudi5WSVRFX0NMRVJLX1BVQkxJU0hBQkxFX0tFWVxuXG5pZiAoIVBVQkxJU0hBQkxFX0tFWSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIFB1Ymxpc2hhYmxlIEtleVwiKVxufVxuXG5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpLnJlbmRlcihcbiAgPFN0cmljdE1vZGU+XG4gICAgICA8Q2xlcmtQcm92aWRlciBwdWJsaXNoYWJsZUtleT17UFVCTElTSEFCTEVfS0VZfSBhZnRlclNpZ25PdXRVcmw9XCIvXCI+XG4gICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxuICAgIDwvQ2xlcmtQcm92aWRlcj5cbiAgPC9TdHJpY3RNb2RlPixcbilcbiJdLCJmaWxlIjoiL1VzZXJzL21pbm1pbi9jYXItbWFuYWdlbWVudC9jYXItbWFya2V0cGxhY2Uvc3JjL21haW4uanN4In0=