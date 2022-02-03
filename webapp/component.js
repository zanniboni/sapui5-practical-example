/* O component é utilizado para individualizar as ações dos controllers
e das views */

/* Dentro do metadata -> rootView -> viewName é onde estará referenciando a view
do component */
sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("sap.ui.walkthrough.Component", {
      metadata: {
        manifest: "json",
      },
      init: function () {
        // Call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        //  Determinar modelo de dados na view
        var oData = {
          recipient: {
            name: "UI5",
          },
        };

        /* Gerar a view baseado na variavel oData */
        var oModel = new JSONModel(oData);
        this.setModel(oModel);
      },
    });
  }
);
