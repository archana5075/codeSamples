/*Author : Archana*/
(function($) {
	
	//JSON ARRAY
	var loans = [{applicantId:"A101", loanId:"L1", amount:"$1000", type:"Home", interest:"3.5%"},
	             {applicantId:"A102", loanId:"L2", amount:"$500",  type:"Personal", interest:"2.5%"},
	             {applicantId:"A103", loanId:"L3", amount:"$1500", type:"Business", interest:"4.5%"},
	             {applicantId:"A104", loanId:"L4", amount:"$600",  type:"Personal", interest:"2.5%"}];
	
	
	// MODEL CLASS LOAN
	var Loan = Backbone.Model.extend({
    
		defaults:{ 
        	       applicantImage:"WebContent/img/passport.jpg"
                 }
    });
			
	// COLLECTION CLASS LOANLIST
	 var LoanList = Backbone.Collection.extend({
	        model:Loan
	    });
	 
	 
	// VIEW CLASS LOANVIEW TEMPLATE
	 var LoanView = Backbone.View.extend({
	        tagName:"div",
	        className:"loanContainer",
	        template:$("#loanTemplate").html(),

	        render:function () {
	            var tmpl = _.template(this.template); //tmpl is a function that takes a JSON and returns html
	            this.$el.html(tmpl(this.model.toJSON())); //this.el is what we defined in tagName. use $el to get access to jQuery html() function
	            return this;
	        }
	
	 });//END LOANVIEW
	
	
	 //VIEW CLASS LOANLISTVIEW
	  var LoanListView = Backbone.View.extend({
	        el:$("#loans"),

	        initialize:function(){
	            this.collection = new LoanList(loans);
	            this.render();
	        },

	        render: function(){
	            var that = this;
	            _.each(this.collection.models, function(item){
	                that.renderLoan(item);
	            });
	        },

	        renderLoan:function(item){
	            var loanView = new LoanView({
	                model: item
	            });
	            this.$el.append(loanView.render().el);
	        }
	    });
	 
	  
	 // VIEW CLASS LOANLISTVIEW INITIALIZED
	 	 var loansView = new LoanListView();
	 	 	
})(jQuery); //END FUNCTION($)