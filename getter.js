module.exports = (property) => `
	public function ${property.getterName()}(){return $this->${property.getName()};}`;
