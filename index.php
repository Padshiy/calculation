
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="font/font.css">
    <div id="calculation">
        <div class="header-calculation">

            <div class="left-door">
                <div class="door-text">Вид с наружи</div>
                <div class="bg-left-door"></div>
                <div id="left-door-opanelka">
                    <div class="ld-stor">
                        <div id="petlaya-top">
                            <div></div>
                            <div id="petlaya-opanelka-top"></div>
                        </div>
                        <div id="petlaya-bottom">
                            <div></div>
                            <div id="petlaya-opanelka-bottom"></div>
                        </div>
                        <div id="ld-nakladkic"></div>
                        <div id="ld-nakladkis"></div>
                        <div id="ld-ruchka"></div>

                    </div>
                    <div class="glazok"></div>
                    <div id="ld-met">

                    </div>
                    <div id="ld-filenka">
                        <div id="ld-filenka-ris"></div>
                    </div>
                    <div id="ld-rust">
                        <canvas id="rust-canvas-left" width="50" height="475"></canvas>
                        <canvas id="rust-canvas-right" width="50" height="475"></canvas>
                    </div>
                    <div id="ld-aplication"></div>
                    <div id="ld-color-mdf">
                        <div id="ld-mdf"></div>
                    </div>

                    <div id="ld-steklo"></div>
                    <div id="ld-arrow">
                        <div id="dver-arrow-left">
                            <div></div>
                        </div>
                        <div id="dver-arrow-right">
                            <div></div>
                        </div>
                    </div>
                    <div id="ld-still">
                        <div id="ld-still-left"></div>
                        <div id="ld-still-right"></div>
                    </div>
                </div>

            </div>

            <div class="right-door">
                <div class="door-text">Вид снутри</div>
                <div class="bg-right-door"></div>
                <div id="right-door-opanelka">
                    <div class="rd-stor">
                        <div id="rd-nakladkic"></div>
                        <div id="rd-nakladkis"></div>
                        <div id="rd-ruchka"></div>
                    </div>
                    <div class="glazok"></div>
                    <div id="rd-met"></div>
                    <div id="rd-photo"></div>
                    <div id="color-mdf">
                        <div id="rd-mdf"></div>
                    </div>
                </div>

            </div>

            <div class="form-calculation">

                <span id="razmeri">Габаритные размеры</span>
                <select name="size" id="size" size="1">
                    <option value="850*2050мм">850*2050мм</option>
                    <option value="860*2050мм">860*2050мм</option>
                    <option value="880*2050мм" selected>880*2050мм</option>
                    <option value="890*2050мм">890*2050мм</option>
                    <option value="950*2050мм">950*2050мм</option>
                    <option value="960*2050мм">960*2050мм</option>
                    <option value="890*2090мм">890*2090мм</option>
                    <option value="960*2050мм">960*2050мм</option>
                </select>
                <input type="checkbox" id="type-dver">
                <label for="type-dver">Тип двери</label>
                <label for="type-dver" class="label-type-dver">
                    <form id="type-dver-form">

                        <input type="radio" name="tp-form-input" id="form-input-2k" checked value="Стандарт с двумя притворам">
                        <label for="form-input-2k" class="tp-form-label">
                            <figure>
                                <img src="../img/type-doors/2k.jpg" alt="двух контурная дверь">
                                <figcaption>Дверь с двумя притворами</figcaption>
                            </figure>
                            <label for="form-input-2k" class="button-label" onclick="TypeDoor2k()">Выбрать</label>
                        </label>
                        <div class="type-dver-div">Дверь с двумя притворами</div>

                        <input type="radio" name="tp-form-input" id="form-input-3k" value="Стандарт с тремя притворами">
                        <label for="form-input-3k" class="tp-form-label">
                            <figure>
                                <img src="../img/type-doors/3k.jpg" alt="Дверь с тремя притворами">
                                <figcaption>Дверь с тремя притворами</figcaption>
                            </figure>
                            <label for="form-input-3k" class="button-label" onclick="TypeDoor3k()">Выбрать</label>
                        </label>
                        <div class="type-dver-div">Дверь с тремя притворами</div>

                        <input type="radio" name="tp-form-input" id="form-input-evro" value="Дизайн с МДФ с двух сторон">
                        <label for="form-input-evro" class="tp-form-label">
                            <figure>
                                <img src="" alt="дверь со скрытыми петлями">
                                <figcaption>Евро</figcaption>
                            </figure>
                            <label for="form-input-evro" class="button-label" onclick="TypeDoorEvro()">Выбрать</label>
                        </label>
                        <div class="type-dver-div">Евро</div>

                        <input type="radio" name="tp-form-input" id="form-input-aero" value="Дизайн с фотопечатью">
                        <label for="form-input-aero" class="tp-form-label">
                            <figure>
                                <img src="../img/type-doors/aero.jpg" alt="">
                                <figcaption>Аэрография</figcaption>
                            </figure>
                            <label for="form-input-aero" class="button-label" onclick="TypeDoorAero()">Выбрать</label>
                        </label>
                        <div class="type-dver-div">Аэрография</div>

                        <input type="radio" name="tp-form-input" id="form-input-termo2k" value="Арктика 2к">
                        <label for="form-input-termo2k" class="tp-form-label">
                            <figure>
                                <img src="" alt="Дверь с терморазрывом, с 2 притворами">
                                <figcaption>Дверь с терморазрывом, с 2 притворами</figcaption>
                            </figure>
                            <label for="form-input-termo2k" class="button-label" onclick="TypeDoorTermo2k()">Выбрать</label>
                        </label>
                        <div class="type-dver-div">Дверь с терморазрывом, с 2 притворами</div>

                        <input type="radio" name="tp-form-input" id="form-input-termo3k" value="Арктика 3к">
                        <label for="form-input-termo3k" class="tp-form-label">
                            <figure>
                                <img src="" alt="Дверь с терморазрывом, с 3 притворами">
                                <figcaption>Дверь с терморазрывом, с 3 притворами</figcaption>
                            </figure>
                            <label for="form-input-termo3k" class="button-label" onclick="TypeDoorTermo3k()">Выбрать</label>
                        </label>
                        <div class="type-dver-div">Дверь с терморазрывом, с 3 притворами</div>
                        <button id="color-met-button" onclick="document.getElementById('type-dver').checked = false;"></button>
                    </form>
                </label>

                <span id="stor-dver">Сторонность</span>
                <input type="radio" id="stor-dver-left" name="stor-dver" checked onclick="StoronnostLeft()">
                <label for="stor-dver-left">Левая</label>
                <input type="radio" id="stor-dver-right" name="stor-dver" onclick="StoronnostRight()">
                <label for="stor-dver-right">Правая</label>



                <span id="scrit-peli">Скрытые петли</span>
                <input type="radio" name="scrit-peli" id="scrit-peli-yes" onclick="Petli()">
                <label for="scrit-peli-yes">Да</label>
                <input type="radio" name="scrit-peli" id="scrit-peli-no" checked onclick="Petli()">
                <label for="scrit-peli-no">Нет</label>




                <input type="checkbox" id="color-met">
                <label for="color-met">Цвет покраски</label>
                <label for="color-met" class="label-color-met">
                    <form id="color-met-form">

                        <input type="radio" name="ld-color-met" id="blackkrokodil">
                        <label for="blackkrokodil" id="blackkrokodil">Чреный крокодил</label>

                        <input type="radio" name="ld-color-met" id="blacksatin">
                        <label for="blacksatin" id="blacksatin">Черный сатин</label>

                        <input type="radio" name="ld-color-met" id="blackshelk">
                        <label for="blackshelk" id="blackshelk">Черный шелк</label>

                        <input type="radio" name="ld-color-met" id="greykrokodil">
                        <label for="greykrokodil" id="greykrokodil">Серый крокодил</label>

                        <input type="radio" name="ld-color-met" id="ugolgold">
                        <label for="ugolgold" id="ugolgold">Угольный с золотым</label>

                        <input type="radio" name="ld-color-met" id="brownkrokodil">
                        <label for="brownkrokodil" id="brownkrokodil">Коричневый крокодил</label>

                        <input type="radio" name="ld-color-met" id="ral8017" checked>
                        <label for="ral8017" id="ral8017">Ral 8017</label>

                        <input type="radio" name="ld-color-met" id="ral8014">
                        <label for="ral8014" id="ral8014">Ral 8014</label>

                        <input type="radio" name="ld-color-met" id="ral7016">
                        <label for="ral7016" id="ral7016">Ral 7016</label>

                        <input type="radio" name="ld-color-met" id="ral9006">
                        <label for="ral9006" id="ral9006">Ral 9006</label>

                        <input type="radio" name="ld-color-met" id="ral9002">
                        <label for="ral9002" id="ral9002">Ral 9002</label>

                        <input type="radio" name="ld-color-met" id="ral9001">
                        <label for="ral9001" id="ral9001">Ral 9001</label>

                        <input type="radio" name="ld-color-met" id="ral9016">
                        <label for="ral9016" id="ral9016">Ral 9016</label>

                        <input type="radio" name="ld-color-met" id="ral9003">
                        <label for="ral9003" id="ral9003">Ral 9003</label>

                        <input type="radio" name="ld-color-met" id="ral6005">
                        <label for="ral6005" id="ral6005">Ral 6005</label>

                        <input type="radio" name="ld-color-met" id="ral5010">
                        <label for="ral5010" id="ral5010">Ral 5010</label>

                        <input type="radio" name="ld-color-met" id="ral5005">
                        <label for="ral5005" id="ral5005">Ral 5005</label>

                        <input type="radio" name="ld-color-met" id="ral3005">
                        <label for="ral3005" id="ral3005">Вишня</label>

                        <input type="radio" name="ld-color-met" id="ral3011">
                        <label for="ral3011" id="ral3011">Ral 3011</label>

                        <input type="radio" name="ld-color-met" id="ral8003">
                        <label for="ral8003" id="ral8003">Ral 8003</label>

                    </form>

                    <button id="color-met-button" onclick="document.getElementById('color-met').checked=false;"></button>

                </label>

                <input type="checkbox" id="nar-otdelka">
                <label for="nar-otdelka" id="label-nar-otdelka">Наружняя отделка</label>
                <label for="nar-otdelka" class="label-nar-otdelka">
                    <form id="form-nar-otdelka">
                        <input type="radio" name="form-nar-otdelka" id="no-form-nar-otdelka" checked onclick="NarOtdelkaNo()" value="без отделки">
                        <label for="no-form-nar-otdelka">
                            <figure>
                                <img src="" alt="без отделки" id="img-no-vno">
                                <figcaption>
                                    Нет отделки
                                </figcaption>
                            </figure>
                        </label>
                        <input type="radio" id="rust" name="form-nar-otdelka" onclick="NarOtdelkaRust()" value="элемент Руст">
                        <label for="rust">
                            <figure>
                                <img src="" alt="">
                                <figcaption>
                                    Руст
                                </figcaption>
                            </figure>
                        </label>
                        <input type="radio" name="form-nar-otdelka" id="stil" onclick="NarOtdelkaStil()" value="элемент Стиль">
                        <label for="stil">
                            <figure>
                                <img src="" alt="">
                                <figcaption>
                                    Стиль
                                </figcaption>
                            </figure>
                        </label>
                        <input type="radio" name="form-nar-otdelka" id="filenka" onclick="NarOtdelkaPhil()" value="филенки">
                        <label for="filenka">
                            <figure>
                                <img src="" alt="">
                                <figcaption>
                                    Филенка
                                </figcaption>
                            </figure>
                        </label>


                        <input type="radio" name="form-nar-otdelka" id="narmdf" onclick="NarOtdelkaMDF()" value="МДФ">
                        <label for="narmdf">
                            <figure>
                                <img src="" alt="">
                                <figcaption>
                                    МДФ
                                </figcaption>
                            </figure>
                        </label>
                        <input type="radio" name="form-nar-otdelka" id="arrow" onclick="NarOtdelkaArrow()" value="элемент Стрелла">
                        <label for="arrow">
                            <figure>
                                <img src="" alt="">
                                <figcaption>
                                    Стрела
                                </figcaption>
                            </figure>
                        </label>


                    </form>
                </label>

                <input type="checkbox" id="nar-photo">
                <label for="nar-photo" id="label-np">Фотопечать</label>
                <label for="nar-photo" class="label-np">
                    <form id="form-np">
                        <?php include_once 'photo.php' ?>
                    </form>
                </label>

                <input type="checkbox" id="nar-mdf-vybor">
                <label for="nar-mdf-vybor" id="label-nar-mdf-vybor">Вырианты МДФ</label>
                <label for="nar-mdf-vybor" class="label-nar-mdf-vybor">
                    <form id="form-nar-otdelka-mdf">

                        <input type="radio" name="input-nar-otdelka" id="no-mdf-nar" checked>
                        <label for="no-mdf-nar" id="no-mdf-nar">Без рисунка</label>

                        <?php include_once 'mdf-nar.php' ?>


                    </form>
                </label>

                <input type="checkbox" id="filenka-variant">
                <label for="filenka-variant" id="label-filenka-variant">Варианты филенок</label>
                <label for="filenka-variant" class="label-filenka-variant">

                    <form id="form-filenka-variant">
                        
                        <input type="radio" name="input-filenka-variant" id="filenka20" checked>
                        <label for="filenka20" id="filenka20">Вариант №20</label>

                        <input type="radio" name="input-filenka-variant" id="filenka25">
                        <label for="filenka25" id="filenka25">Вариант №25</label>
                        <input type="radio" name="input-filenka-variant" id="filenka35">
                        <label for="filenka35" id="filenka35">Вариант №35</label>
                        <input type="radio" name="input-filenka-variant" id="filenka36">
                        <label for="filenka36" id="filenka36">Вариант №36</label>
                        <input type="radio" name="input-filenka-variant" id="filenka43">
                        <label for="filenka43" id="filenka43">Вариант №43</label>
                        <input type="radio" name="input-filenka-variant" id="filenka98">
                        <label for="filenka98" id="filenka98">Вариант №98</label>
                    </form>

                </label>

                <input type="checkbox" id="color-nar-otdelka">
                <label for="color-nar-otdelka" id="label-color-nar-otdelka">Цвет наружной отделки</label>
                <label for="color-nar-otdelka" class="label-color-nar-otdelka">
                    <div class="text-form">Не выбрана отделка наружной двери</div>
                    <form id="form-color-mdf-nar">

                        <input type="radio" name="input-color-mdf-nar" id="venge-nar" checked>
                        <label for="venge-nar" id="venge-nar">Венге</label>

                        <input type="radio" name="input-color-mdf-nar" id="whitederevo-nar">
                        <label for="whitederevo-nar" id="whitederevo-nar">Белое дерево</label>

                        <input type="radio" name="input-color-mdf-nar" id="mahagon-nar">
                        <label for="mahagon-nar" id="mahagon-nar">Махагон</label>

                        <input type="radio" name="input-color-mdf-nar" id="belendub-nar">
                        <label for="belendub-nar" id="belendub-nar">Выбеленный дуб</label>

                        <input type="radio" name="input-color-mdf-nar" id="dub-nar">
                        <label for="dub-nar" id="dub-nar">Дуб</label>

                        <input type="radio" name="input-color-mdf-nar" id="italoreh-nar">
                        <label for="italoreh-nar" id="italoreh-nar">Итальянский орех</label>

                        <input type="radio" name="input-color-mdf-nar" id="staroederevo-nar">
                        <label for="staroederevo-nar" id="staroederevo-nar">Старое дерево</label>

                        <input type="radio" name="input-color-mdf-nar" id="buk-nar">
                        <label for="buk-nar" id="buk-nar">Бук</label>
                    </form>
                    <form id="color-arrow">

                        <input type="radio" name="color-arrow-input" id="color-arrow-no" checked>
                        <label for="color-arrow-no" id="color-arrow-no">В цвет двери</label>

                        <input type="radio" name="color-arrow-input" id="blackkrokodil-arrow">
                        <label for="blackkrokodil-arrow" id="blackkrokodil-arrow">Чреный крокодил</label>

                        <input type="radio" name="color-arrow-input" id="blacksatin-arrow">
                        <label for="blacksatin-arrow" id="blacksatin-arrow">Черный сатин</label>

                        <input type="radio" name="color-arrow-input" id="blackshelk-arrow">
                        <label for="blackshelk-arrow" id="blackshelk-arrow">Черный шелк</label>

                        <input type="radio" name="color-arrow-input" id="greykrokodil-arrow">
                        <label for="greykrokodil-arrow" id="greykrokodil-arrow">Серый крокодил</label>

                        <input type="radio" name="color-arrow-input" id="ugolgold-arrow">
                        <label for="ugolgold-arrow" id="ugolgold-arrow">Угольный с золотым</label>

                        <input type="radio" name="color-arrow-input" id="brownkrokodil-arrow">
                        <label for="brownkrokodil-arrow" id="brownkrokodil-arrow">Коричневый крокодил</label>

                        <input type="radio" name="color-arrow-input" id="ral8017-arrow">
                        <label for="ral8017-arrow" id="ral8017-arrow">Ral 8017</label>

                        <input type="radio" name="color-arrow-input" id="ral8014-arrow">
                        <label for="ral8014-arrow" id="ral8014-arrow">Ral 8014</label>

                        <input type="radio" name="color-arrow-input" id="ral7016-arrow">
                        <label for="ral7016-arrow" id="ral7016-arrow">Ral 7016</label>

                        <input type="radio" name="color-arrow-input" id="ral9006-arrow">
                        <label for="ral9006-arrow" id="ral9006-arrow">Ral 9006</label>

                        <input type="radio" name="color-arrow-input" id="ral9002-arrow">
                        <label for="ral9002-arrow" id="ral9002-arrow">Ral 9002</label>

                        <input type="radio" name="color-arrow-input" id="ral9001-arrow">
                        <label for="ral9001-arrow" id="ral9001-arrow">Ral 9001</label>

                        <input type="radio" name="color-arrow-input" id="ral9016-arrow">
                        <label for="ral9016-arrow" id="ral9016-arrow">Ral 9016</label>

                        <input type="radio" name="color-arrow-input" id="ral9003-arrow">
                        <label for="ral9003-arrow" id="ral9003-arrow">Ral 9003</label>

                        <input type="radio" name="color-arrow-input" id="ral6005-arrow">
                        <label for="ral6005-arrow" id="ral6005-arrow">Ral 6005</label>

                        <input type="radio" name="color-arrow-input" id="ral5010-arrow">
                        <label for="ral5010-arrow" id="ral5010-arrow">Ral 5010</label>

                        <input type="radio" name="color-arrow-input" id="ral5005-arrow">
                        <label for="ral5005-arrow" id="ral5005-arrow">Ral 5005</label>

                        <input type="radio" name="color-arrow-input" id="ral3005-arrow">
                        <label for="ral3005-arrow" id="ral3005-arrow">Вишня</label>

                        <input type="radio" name="color-arrow-input" id="ral3011-arrow">
                        <label for="ral3011-arrow" id="ral3011-arrow">Ral 3011</label>

                        <input type="radio" name="color-arrow-input" id="ral8003-arrow">
                        <label for="ral8003-arrow" id="ral8003-arrow">Ral 8003</label>

                    </form>

                    <button id="color-met-button" onclick="document.getElementById('color-met').checked=false;"></button>
                </label>


                <input type="checkbox" id="vybor-nar-otdelka">
                <label for="vybor-nar-otdelka">Внутренняя отделка</label>
                <label for="vybor-nar-otdelka" class="label-vnr">
                    <form id="form-vnr">
                        <input type="radio" name="input-vnr" id="no-vnr" checked>
                        <label for="no-vnr" id="label-no-vnr" onclick="NoVNR()">Металл</label>
                        <input type="radio" name="input-vnr" id="mdf-vnr">
                        <label for="mdf-vnr" id="label-mdf-vnr" onclick="MDFVNR()">МДФ</label>
                        <input type="radio" name="input-vnr" id="photo-vnr">
                        <label for="photo-vnr" id="label-photo-vnr" onclick="PhotoVNR()">Фотопечать</label>
                    </form>
                </label>

                <input type="checkbox" id="vnut-photo">
                <label for="vnut-photo" id="label-vp">Фотопечать</label>
                <label for="vnut-photo" class="label-vp">
                    <form id="form-vp">
                        <?php include_once 'photo-v.php' ?>
                    </form>
                </label>

                <input type="checkbox" id="vnut-otdelka">
                <label for="vnut-otdelka" id="label-vnut-otdelka">МДФ панели</label>
                <label for="vnut-otdelka" class="label-vnut-otdelka">
                    <form id="form-vnut-otdelka">

                        <input type="radio" name="input-vnut-otdelka" id="no-mdf" checked>
                        <label for="no-mdf" id="no-mdf">Без рисунка</label>

                        <?php include_once 'script.php' ?>


                    </form>
                </label>
                <input type="checkbox" id="color-vnut-otdelka">
                <label for="color-vnut-otdelka" id="label-color-vnut-otdelka">Цвет внутренней панели</label>
                <label for="color-vnut-otdelka" class="label-color-vnut-otdelka">
                    <form id="form-color-mdf">

                        <input type="radio" name="input-color-mdf" id="venge" checked>
                        <label for="venge" id="venge">Венге</label>

                        <input type="radio" name="input-color-mdf" id="whitederevo">
                        <label for="whitederevo" id="whitederevo">Белое дерево</label>

                        <input type="radio" name="input-color-mdf" id="mahagon">
                        <label for="mahagon" id="mahagon">Махагон</label>

                        <input type="radio" name="input-color-mdf" id="belendub">
                        <label for="belendub" id="belendub">Выбеленный дуб</label>

                        <input type="radio" name="input-color-mdf" id="dub">
                        <label for="dub" id="dub">Дуб</label>

                        <input type="radio" name="input-color-mdf" id="italoreh">
                        <label for="italoreh" id="italoreh">Итальянский орех</label>

                        <input type="radio" name="input-color-mdf" id="staroederevo">
                        <label for="staroederevo" id="staroederevo">Старое дерево</label>

                        <input type="radio" name="input-color-mdf" id="buk">
                        <label for="buk" id="buk">Бук</label>
                    </form>
                </label>





                <span>Цвет фурнитуры</span>
                <input type="radio" id="furnitura-chrom" name="furnitura" checked onclick="Furnitura()">
                <label for="furnitura-chrom">Хром</label>
                <input type="radio" id="furnitura-zoloto" name="furnitura" onclick="Furnitura()">
                <label for="furnitura-zoloto">Золото</label>




                <input type="checkbox" id="zamki">
                <label for="zamki">Замки</label>
                <label for="zamki" class="label-zamki">
                    <form id="form-zamki">
                        <input type="radio" name="input-zamki" id="input-zamkig-g5015" checked onclick="document.getElementById('zamki').checked = false;">
                        <label for="input-zamkig-g5015" class="form-label-zamki" >
                            <figure>
                                <img src="../img/zamki/g5015.jpg" alt="замок гардиан 5015">
                                <figcaption>
                                    Гардиан 50.15
                                </figcaption>
                            </figure>
                        </label>
                        <div class="type-dver-div">Диаметр ригелей 15,8 мм Повышенная защита от наиболее распространенных методов вскрытия — Защита от самоимпрессии – втулка на корпусе и крышке замка — Защита от вскрытия отмычкой – ложные пазы на стойке и сувальдах, увеличенная жесткость пружин сувальд — Защита от вандалов – отсутствует нижняя стенка корпуса замка — Защита от «свертыша» – ослабленный зуб рейки хвостовика — Защита от взлома – при полностью выдвинутых ригелях замка, 30% их длины остается в корпусе замка, усилена конструкция засовов — Защита от высверливания – внешняя бронепластина, закаленная стойка рейки хвостовика 4 ключа в комплекте
                        </div>
                        <input type="radio" name="input-zamki" id="input-zamkig-g3211-g5001" onclick="document.getElementById('zamki').checked = false;">
                        <label for="input-zamkig-g3211-g5001" class="form-label-zamki">
                            <figure>
                                <img src="../img/zamki/3211+5001.jpg" alt="Дверь с двумя замками гардиан">
                                <figcaption>Гардиан 32.11 + Гардиан 50.01</figcaption>
                            </figure>
                        </label>
                        <div class="type-dver-div">
                            <h2>Гардиан 32.11</h2>
                            <br> Тип механизма Цилиндровый
                            <br> Класс (ГОСТ 5089-2011) 4
                            <br> Количество оборотов 2
                            <br> Толщина полотна двери 40-75 мм
                            <br> Габариты 156,5х97,5х22 мм
                            <br> Вылет ригелей 26 мм
                            <br> Диаметр ригелей 15,8 мм
                            <h2>Гардиан 50.01</h2>
                            <br> Повышенная защита от наиболее распространенных методов вскрытия
                            <br> — Защита от самоимпрессии – втулка на корпусе и крышке замка
                            <br> — Защита от вскрытия отмычкой – ложные пазы на стойке и сувальдах, увеличенная жесткость пружин сувальд
                            <br> — Защита от «свертыша» – ослабленный зуб рейки хвостовика
                            <br> — Защита от взлома – при полностью выдвинутых ригелях замка, 30% их длины остается в корпусе замка, усилена конструкция засовов
                            <br> — Защита от высверливания – внешняя бронепластина, закаленная стойка рейки хвостовика
                            <br> — Защита от вандалов – отсутствует нижняя стенка корпуса замка
                            <br> Тип механизма Сувальдный
                            <br> Тип установки Врезной
                            <br> Класс (ГОСТ 5089-2011) 3
                            <br> Количество сувальд 8 Количество комбинаций более 1,6 млн
                            <br> Количетсво полуоборотов 2
                            <br> Толщина полотна двери 40-75 мм
                            <br> Габариты 90х97,5х26 мм
                            <br> Вылет ригелей 26 мм
                            <br> Диаметр ригелей 15,8 мм
                            <br> Количество ключей 4 шт
                            <br>
                        </div>
                        <input type="radio" name="input-zamki" id="input-zamkig-g2112-g3201" onclick="document.getElementById('zamki').checked = false;">
                        <label for="input-zamkig-g2112-g3201" class="form-label-zamki">
                            <figure>
                                <img src="" alt="Гардиан 21.12 + Гардиан 32.01">
                                <figcaption>Гардиан 21.12 + Гардиан 32.01</figcaption>
                            </figure>
                        </label>
                        <div class="type-dver-div">Гардиан 21.12 + Гардиан 32.01</div>

                        <input type="radio" name="input-zamki" id="form-zamki-7001-3201" onclick="document.getElementById('zamki').checked = false;">
                        <label for="form-zamki-7001-3201" class="form-label-zamki">
                            <figure>
                                <img src="" alt="Potent 7001 + Гардиан 32.01">
                                <figcaption>Potent 7001 + Гардиан 32.01</figcaption>
                            </figure>
                        </label>
                        <div class="type-dver-div">Potent 7001 + Гардиан 32.01</div>
                        <input type="radio" name="input-zamki" id="form-zamki-2571" onclick="document.getElementById('zamki').checked = false;">
                        <label for="form-zamki-2571" class="form-label-zamki">
                            <figure>
                                <img src="" alt="Potent 2571">
                                <figcaption>Potent 2571</figcaption>
                            </figure>
                        </label>
                        <div class="type-dver-div">Potent 2571</div>
                    </form>
                </label>

                <button id="price">Заказать замер</button>
                <label id="total_money" style="width:calc(100% - 10px); text-align:center; font-size:42px; color:red"></label>
            </div>

        </div>
        <div id="random"></div>
        <div class="footer-calculation">
            <span>Модель двери: <span id="text-td" value="tp-form-input"></span></span>
            <span>Цвет покраски: <span value="ld-color-met"></span></span>
            <span>Сторонность двери: <span value="stor-dver"></span></span>
            <span>Скрытые петли: <span value="scrit-peli"></span></span>
            <span>Наружняя отделка: 
                <span id="span-nar-otdelka" value="form-nar-otdelka"></span>
                <span id="span-input-np" value="input-np"></span>
                <span id="span-input-nar-otdelka" value="input-nar-otdelka"></span>
                <span id="span-filenka-variant" value="input-filenka-variant"></span>
                <span id="span-color-mdf-nar" value="input-color-mdf-nar"></span>
                <span id="span-color-arrow-input" value="color-arrow-input"></span>
            </span>

            <span>
                
            </span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

        </div>
    </div>
    <script src="js/values.js" type="text/javascript"></script>
    <script src="js/script.js" type="text/javascript"></script>
