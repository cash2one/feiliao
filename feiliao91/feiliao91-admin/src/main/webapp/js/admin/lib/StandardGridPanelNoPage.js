Ext.namespace("ast.ast1949");

ast.ast1949.StandardGridPanelNoPage = Ext.extend(Ext.grid.GridPanel,{
	constructor:function(_cfg){
		if(_cfg == null)
			_cfg = {};
		Ext.apply(this, _cfg);

		var _sm = this["sm"] == null ? '' : this["sm"];
		var _cm = this["cm"] == null? '' : this["cm"];
		var _reader = this["reader"] == null ? '' : this["reader"];
		var _storeUrl = this["storeUrl"] == null ? '' : this["storeUrl"];
		var _title = this["title"] == null ? '' : this["title"];
		var _params = this["baseParams"] == null ? {} : this["baseParams"];
		var _tbar = this["tbar"] == null ? [] : this["tbar"];
//		var _autoLoad=this["autoLoad"] || false;
//		var _plugins = this["plugins"] == null ? "":this["plugins"];
		var _store = new Ext.data.JsonStore({
			root:"records",
			totalProperty: 'totalRecords',
			remoteSort:false,
			fields:_reader,
			url: _storeUrl,
			autoLoad: true,
//			autoLoad:{params:{"startIndex":0,"pageSize":Context.PAGE_SIZE}}, //自动加载第一页
			baseParams:_params //加载后的基本参数
		});

		_store.on("beforeload", function(myds,options) {
			this.paramNames ={start:"startIndex",limit:"pageSize",sort:"sort",dir:"dir"};
		});

		ast.ast1949.StandardGridPanelNoPage.superclass.constructor.call(this,{
			enableClumnMove:false,
			iconCls : "icon-grid",
			frame:true,
			viewConfig:{
				autoFill :true,
				emptyText:"没有记录"
			},
			title:_title,
			colModel:_cm,
			store : _store,
			selModel: _sm,
//			paramNames : {sort:"sort",dir:"dir",start:"startIndex",limit:"pageSize"} ,
			tbar: _tbar
		});
		this.addEvents("query","add","edit","delete","view");
	},
	onQueryButtonClick : function(){
		this.fireEvent("query",this);
	},
	onAddButtonClick : function(){
		this.fireEvent("add",this);
	},
	onEditButtonClick : function(){
		this.fireEvent("edit",this);
	},
	onDeleteButtonClick : function(){
		this.fireEvent("delete",this);
	},
	onViewButtonClick : function(){
		this.fireEvent("view",this);
	}

});