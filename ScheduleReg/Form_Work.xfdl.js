(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("ScheduleRegist");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("scheduleRegistTable", this);
            obj._setContents("<ColumnInfo><Column id=\"schId\" type=\"INT\" size=\"256\"/><Column id=\"schTitle\" type=\"STRING\" size=\"256\"/><Column id=\"staDate\" type=\"DATE\" size=\"256\"/><Column id=\"endDate\" type=\"DATE\" size=\"256\"/><Column id=\"staTime\" type=\"TIME\" size=\"256\"/><Column id=\"endTime\" type=\"TIME\" size=\"256\"/><Column id=\"memo\" type=\"STRING\" size=\"518\"/><Column id=\"staAllDay\" type=\"STRING\" size=\"256\"/><Column id=\"endAllDay\" type=\"STRING\" size=\"256\"/><Column id=\"alertEmailYN\" type=\"STRING\" size=\"2\"/><Column id=\"alertRecUserId\" type=\"STRING\" size=\"256\"/><Column id=\"schWriUserId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("alertEmailList", this);
            obj._setContents("<ColumnInfo><Column id=\"alertEmailId\" type=\"STRING\" size=\"256\"/><Column id=\"schId\" type=\"STRING\" size=\"256\"/><Column id=\"alertEmailSelect\" type=\"STRING\" size=\"256\"/><Column id=\"recUserId\" type=\"STRING\" size=\"256\"/><Column id=\"alertYN\" type=\"STRING\" size=\"256\"/><Column id=\"createId\" type=\"STRING\" size=\"256\"/><Column id=\"createTime\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("MainFrame","0","0","1281","725",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","62","55","1133","350",null,null,null,null,null,null,this.MainFrame.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("#edf2f9");
            this.MainFrame.addChild(obj.name, obj);

            obj = new Div("Div01","177","481","888","209",null,null,null,null,null,null,this.MainFrame.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.MainFrame.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
