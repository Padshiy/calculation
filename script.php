<?php
                        $dir = '../calculation/img/mdf/';
                        $scan = scandir($dir);

                        for ($i=0; $i<count($scan); $i++) {
                         if ($scan[$i] != '.' && $scan[$i] != '..') {
							$scan[$i] = mb_strtolower($scan[$i]);
							$row1 = str_replace('.png', '', $scan[$i]);
							$row1 = str_replace('ris', '', $row1);
							
                         echo '
                        <input type="radio" name="input-vnut-otdelka" id="'. $row1 . '" style="display:none">
                        <label for="'. $row1 . '" id="'. $row1 . '" style="background:url(../img/mdf/'. $scan[$i] . '); background-size:100%; background-position:100%; text-shadow: 0px -1px 2px rgba(12, 28, 255, 1);">Рисунок №'. $row1 . '</label>';
                         }
                        }
						?>