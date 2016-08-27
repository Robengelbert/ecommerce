<?php

/**
 * Class elIterator
 *
 * @author Robert Engelbert <rob@robertengelbert.com>
 */
class elIterator implements Iterator{
	private $location = 0;
	private $list = array(
		"locationOne",
		"locationTwo",
		"locationThree",
	);

	/**
	 * elIterator constructor.
	 */
	public function __construct() {
		$this->location = 0;
	}

	/**
	 *  When you create a class and say that it implements Iterator, you must define the functions of Iterator.
	 */

	function current() {
		var_dump(__METHOD__);
		return $this->list[$this->location];
	}
	function key() {
		var_dump(__METHOD__);
		return $this->location;
	}
	function next() {
		var_dump(__METHOD__);
		++$this->location;
	}
	function rewind(){
		var_dump(__METHOD__);
		$this->location = 0;
	}
	function valid(){
		var_dump(__METHOD__);
		return isset($this->list[$this->location]);
	}
}

$el = new elIterator;


foreach($el as $key => $value){
	var_dump($key, $value);
	echo "\n";
}