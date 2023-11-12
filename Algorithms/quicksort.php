<?php 

function partition (&$arr, $low, $high) {
	$pivot = $arr[$high];
	$i = $low - 1;

	for($k=$low; $k < $high; $k++) {
		// code...
	
		if($arr[$k] < $pivot) {
			
			$i++;
			[ $arr[$i], $arr[$k] ] = [ $arr[$k], $arr[$i] ];
		
			
		}	
	}
	
	[$arr[$i + 1], $arr[$high]] = [$arr[$high], $arr[$i + 1]]; 
	
	return $i + 1;
}


function quicksort(&$arr, $low, $high) {
	
	if($low < $high) {
		$pi = partition($arr, $low, $high);		
		
		// echo $low.$high." ";	
		
		quicksort($arr, $low, $pi-1);
		quicksort($arr, $pi+1, $high);
	}

}

$arr_list = [24, 9, 29, 14, 19, 27];

$N = count($arr_list);

quicksort($arr_list, 0, $N-1);


print_r($arr_list);
