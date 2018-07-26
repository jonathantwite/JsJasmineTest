using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace JsJasmineTest.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/vendor").Include("~/Scripts/knockout-{version}.js"));
            bundles.Add(new ScriptBundle("~/Scripts/site").Include("~/Scripts/home-index.js"));

            BundleTable.EnableOptimizations = true;
        }
    }
}