module.exports = {

	section: function(name, options){
		if(!this._sections){
			this._sections = {};
		}
		this._sections[name] = options.fn(this);
		return null;
	},

	substring: function(content){
		if(content.length > 50){
			return content.substring(0, 50) + "...";
		}
		return content;
	}

};
