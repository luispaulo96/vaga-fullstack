!function(e){formintorjs.define(["text!tpl/dashboard.html"],function(i){return Backbone.View.extend({className:"sui-box-body",initialize:function(i){var a=this,t={action:"",type:"",id:"",preview_data:{},enable_loader:!0};return"forminator_quizzes"===i.type&&(t.has_lead=i.has_lead,t.leads_id=i.leads_id),i=_.extend(t,i),this.action=i.action,this.type=i.type,this.nonce=i.nonce,this.id=i.id,this.render_id=0,this.preview_data=i.preview_data,this.enable_loader=i.enable_loader,"forminator_quizzes"===i.type&&(this.has_lead=i.has_lead,this.leads_id=i.leads_id),e(document).off("after.load.forminator"),e(document).on("after.load.forminator",function(e){a.after_load()}),this.render()},render:function(){var i=this,a={};if(a.action=this.action,a.type=this.type,a.id=this.id,a.render_id=this.render_id,a.nonce=this.nonce,a.is_preview=1,a.preview_data=this.preview_data,a.last_submit_data={},"forminator_quizzes"===this.type&&(a.has_lead=this.has_lead,a.leads_id=this.leads_id),this.enable_loader){var t="";"sui-box-body"!==this.className&&(t+='<div class="sui-box-body">'),t+='<div class="fui-loading-dialog"><p style="margin: 0; text-align: center;" aria-hidden="true"><span class="sui-icon-loader sui-md sui-loading"></span></p><p class="sui-screen-reader-text">Loading content...</p></div>',"sui-box-body"!==this.className&&(t+="</div>"),i.$el.html(t)}var d=e('<form id="forminator-module-'+this.id+'" data-forminator-render="'+this.render_id+'" style="display:none"></form>');i.$el.append(d),e(i.$el.find("#forminator-module-"+this.id+'[data-forminator-render="'+this.render_id+'"]').get(0)).forminatorLoader(a)},after_load:function(){var e=this;e.$el.find('div[data-form="forminator-module-'+this.id+'"]').remove(),e.$el.find(".fui-loading-dialog").remove()}})})}(jQuery);