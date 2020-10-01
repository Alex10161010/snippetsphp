module.exports = (property) => `
	public function ${property.setterName()}(${property.getTypeHint() ? property.getTypeHint() + ' ' : ''}\$${property.getName()}){$this->${property.getName()} = \$${property.getName()};}
`;
