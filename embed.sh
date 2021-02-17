#!/bin/bash
cat index.html.first > index.html

for i in {0..8}
do
    if [ $((i%3)) -eq 0 ];
    then
        echo '<div class="column">' >> index.html
        cat images/segment_${i}.svg >> index.html
    else
        cat images/segment_${i}.svg >> index.html
        if [ $((i%3)) -eq 2 ];
        then
            echo '</div>' >> index.html
        fi
    fi

done

echo '</div>' >> index.html
 
cat index.html.last >> index.html
