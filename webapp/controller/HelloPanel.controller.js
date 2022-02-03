sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
  function (Controller, MessageToast, Fragment) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
      onShowHello: function () {
        /* Ler mensagem do i18n model */
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        /* Captura a propriedade name vindo da variável oData */
        var sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        /* Adiciona o texto do recipient/name na variável helloMsg
          contida no modelo i18n */
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);
        MessageToast.show(sMsg);
      },
      onOpenDialog: function () {
        var oView = this.getView();

        // Criar dialog
        if (!this.byId("helloDialog")) {
          // Carregar assincronamente o fragmento XML
          Fragment.load({
            id: oView.getId(),
            name: "sap.ui.demo.walkthrough.view.HelloDialog",
          }).then(function (oDialog) {
            // Connectar dialog para o root view do component (models, lifecycle)
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          this.byId("helloDialog").open();
        }
      },
    });
  }
);
