#!/bin/bash

for j in {0..8}; do

	RAND=$(cat /dev/urandom | tr -dc 'a-zA-Z' | fold -w 10 | head -n 1)
        str="-e 's/\bst0\b/$RAND/g'"

	for i in {1..100}; do
		RAND=$(cat /dev/urandom | tr -dc 'a-zA-Z' | fold -w 10 | head -n 1)
		str+=" -e 's/\bst$i\b/$RAND/g'"
	done
	
	# eval "cat segment_$j.svg | sed $str > segment_$j.svg"
    eval "sed -i $str segment_$j.svg"
done

