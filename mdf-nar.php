<?php
                        $dir = '../calculation/img/mdf/';
                        $scan = scandir($dir);

                        for ($i=0; $i<count($scan); $i++) {
                         if ($scan[$i] != '.' && $scan[$i] != '..') {
							$scan[$i] = mb_strtolower($scan[$i]);
							$row1 = str_replace('.png', '', $scan[$i]);
							$row2 = str_replace('ris', '', $scan[$i]);
							$row1 = str_replace('ris', '', $row1);
                         echo '
                        <input type="radio" name="input-nar-otdelka" id="nar'. $row1 . '" style="display:none">
                        <label for="nar'. $row1 . '" id="nar'. $row1 . '" style="background:url(../img/mdf/'. $scan[$i] . '); background-size:100%; background-position:100%"">Рисунок №'. $row1 . '</label>';
                         }
                        }
						?>