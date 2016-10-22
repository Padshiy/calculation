<?php
                        $dir = '../calculation/img/metal/';
                        $scan = scandir($dir);

                        for ($i=0; $i<count($scan); $i++) {
                         if ($scan[$i] != '.' && $scan[$i] != '..') {
							$scan[$i] = mb_strtolower($scan[$i]);
							$row = str_replace('.jpg', '', $scan[$i]);							 
                         echo '
                        <input type="radio" name="ld-color-met" id="'. $scan[$i] . '">
                        <label for="'. $scan[$i] . '" id="'. $scan[$i] . '" style="background:url(../img/metal/'. $scan[$i] . '); background-size:100%; background-position:100%"">'. $row . '</label>';
                         }
                        }
						?>
						