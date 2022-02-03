/* É necessário importar o módulo sap/m/MessageToast para realizar 
notificações Toasts no módulo */
/* A importação do JSONModel serve para criarmos uma view baseada em dados
JSON, assim os dados dessa view podem ser acessados através do XML e também 
modificados em tempo real */
sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  /* Executa o código em modo strict, ajuda a prevenir
    erros de desenvolvimento (Como por exemplo a não definição de var) */
  "use strict";
  return Controller.extend("sap.ui.demo.walkthrough.App", {});
});
