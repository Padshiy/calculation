<?php
                        $dir = '../calculation/img/photo/';
                        $scan = scandir($dir);

                        for ($i=0; $i<count($scan); $i++) {
                         if ($scan[$i] != '.' && $scan[$i] != '..') {
							$scan[$i] = mb_strtolower($scan[$i]);
							$row = str_replace('.png', '', $scan[$i]);
							$row = str_replace('ris', '', $row);
							
                         echo '
                        <input type="radio" name="input-pv" id="photov'. $row . '" style="display:none">
                        <label for="photov'. $row . '" id="photov'. $row . '" style="background:url(../img/photo/'. $scan[$i] . '); background-size:100%; background-position:100%; text-shadow: 0px -1px 2px rgba(12, 28, 255, 1);">Фото №'. $row . '</label>';
                         }
                        }
						?>