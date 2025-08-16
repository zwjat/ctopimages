$(document).ready(function() {

    const shapeData = [
        {
            shapeForm: 1,
            ratio: 1,
        },
        {
            shapeForm: 2,
            ratio: 1,
        },
        {
            shapeForm: 3,
            ratio: 1,
        },
        {
            shapeForm: 4,
            ratio: 1,
        },
        {
            shapeForm: 5,
            ratio: 1,
        },
        {
            shapeForm: 6,
            ratio: 1,
        },
        {
            shapeForm: 7,
            ratio: 1,
        },
        {
            shapeForm: 8,
            ratio: 1,
        },
        {
            shapeForm: 9,
            ratio: 1,
        },
        {
            shapeForm: 10,
            ratio: 1,
        },
        {
            shapeForm: 11,
            ratio: 1,
        },
        {
            shapeForm: 12,
            ratio: 1,
        },
        {
            shapeForm: 13,
            ratio: 1,
        },
        {
            shapeForm: 14,
            ratio: 1,
        },
        {
            shapeForm: 15,
            ratio: 1,
        },
        {
            shapeForm: 16,
            ratio: 1,
        },
        {
            shapeForm: 17,
            ratio: 1,
        },
        {
            shapeForm: 18,
            ratio: 1,
        },
        {
            shapeForm: 19,
            ratio: 1,
        },
        {
            shapeForm: 20,
            ratio: 1,
        },
        {
            shapeForm: 21,
            ratio: 1,
        },
        {
            shapeForm: 22,
            ratio: 1,
        },
        {
            shapeForm: 23,
            ratio: 1,
        },
        {
            shapeForm: 24,
            ratio: 1,
        },
        {
            shapeForm: 25,
            ratio: 1,
        },
        {
            shapeForm: 26,
            ratio: 1,
        },
        {
            shapeForm: 27,
            ratio: 1,
        },
        {
            shapeForm: 28,
            ratio: 1,
        },
        {
            shapeForm: 29,
            ratio: 1,
        },
        {
            shapeForm: 30,
            ratio: 1,
        },
        {
            shapeForm: 31,
            ratio: 1,
        },
        {
            shapeForm: 32,
            ratio: 1,
        },
        {
            shapeForm: 33,
            ratio: 0.76666,
        },
        {
            shapeForm: 34,
            ratio: 1.2,
        },
        {
            shapeForm: 35,
            ratio: 1.11764,
        },
        {
            shapeForm: 36,
            ratio: 0.8333,
        },
        {
            shapeForm: 37,
            ratio: 1.15165,
        },
        {
            shapeForm: 38,
            ratio: 1.15165,
        },
        {
            shapeForm: 39,
            ratio: 0.94444,
        },
        {
            shapeForm: 40,
            ratio: 1.046,
        },
        {
            shapeForm: 41,
            ratio: 1.046,
        },
        {
            shapeForm: 42,
            ratio: 1.064,
        },
        {
            shapeForm: 43,
            ratio: 1.1993,
        },
        {
            shapeForm: 44,
            ratio: 1,
        },
        {
            shapeForm: 45,
            ratio: 1.15675,
        },
        {
            shapeForm: 46,
            ratio: 1.0277,
        },
        {
            shapeForm: 47,
            ratio: 1.4377,
        },
        {
            shapeForm: 48,
            ratio: 1.1723,
        },
        {
            shapeForm: 49,
            ratio: 77.44 / 79.96,
        },
        {
            shapeForm: 50,
            ratio: 1,
        },
        {
            shapeForm: 51,
            ratio: 1,
        },
        {
            shapeForm: 52,
            ratio: 79.97 / 80.01,
        },
        {
            shapeForm: 53,
            ratio: 0.93759,
        },
        {
            shapeForm: 54,
            ratio: 1,
        },
        {
            shapeForm: 55,
            ratio: 0,
        },
        {
            shapeForm: 56,
            ratio: 4 / 3,
        },
        {
            shapeForm: 57,
            ratio: 3 / 2,
        },
        {
            shapeForm: 58,
            ratio: 5 / 3,
        },
        {
            shapeForm: 59,
            ratio: 1,
        },
        {
            shapeForm: 60,
            ratio: 3 / 4,
        },
        {
            shapeForm: 61,
            ratio: 5 / 4,
        },
        {
            shapeForm: 62,
            ratio: 6 / 4,
        },
        {
            shapeForm: 63,
            ratio: 7 / 5,
        },
        {
            shapeForm: 64,
            ratio: 16 / 9,
        },
        {
            shapeForm: 65,
            ratio: 1.19,
        },
        {
            shapeForm: 66,
            ratio: 1.43027,
        },
        {
            shapeForm: 67,
            ratio: 1.114595,
        },
        {
            shapeForm: 68,
            ratio: 1.312779,
        },
        {
            shapeForm: 69,
            ratio: 1.480769,
        },
        {
            shapeForm: 70,
            ratio: 1.233476,
        },
        {
            shapeForm: 71,
            ratio: 79.98 / 80.01,
        },
        {
            shapeForm: 72,
            ratio: 1.001734,
        },
        {
            shapeForm: 73,
            ratio: 1.20083,
        },
        {
            shapeForm: 74,
            ratio: 1.22695,
        },
        {
            shapeForm: 75,
            ratio: 0.792725,
        },
        {
            shapeForm: 76,
            ratio: 1.0046,
        },
        {
            shapeForm: 77,
            ratio: 1,
        },
        {
            shapeForm: 78,
            ratio: 0.99942,
        },
        {
            shapeForm: 79,
            ratio: 0.9965,
        },
        {
            shapeForm: 80,
            ratio: 1,
        },
        {
            shapeForm: 81,
            ratio: 0.99796,
        },
        {
            shapeForm: 82,
            ratio: 1.189667,
        },
        {
            shapeForm: 83,
            ratio: 1.220338,
        },
        {
            shapeForm: 84,
            ratio: 1.0944010,
        },
        {
            shapeForm: 85,
            ratio: 1.2435897,
        },
        {
            shapeForm: 86,
            ratio: 1.7601626,
        },
        {
            shapeForm: 87,
            ratio: 1.1342592,
        },
        {
            shapeForm: 88,
            ratio: 1.09253,
        },
        {
            shapeForm: 89,
            ratio: 1.332963,
        },
        {
            shapeForm: 90,
            ratio: 1.333333,
        },
        {
            shapeForm: 91,
            ratio: 1.127201,
        },
        {
            shapeForm: 92,
            ratio: 1.1303763,
        },
    ];

    const shapeObj = {...findShapeObj(findShapeActive())};

    let cropApi,
        counter = 0;
    const picCounter = {
            file: 0,
            crop: 0,
            border: 0,
        },
        image = new Image();


    $(document).on("dragenter", function (event) {
        counter++;
        event.originalEvent.dataTransfer.dropEffect = "copy"
        $(".drop-wrap").show();
    });
    $(document).on("dragover", function (event) {
        event.originalEvent.dataTransfer.dropEffect = "copy"
        event.preventDefault();
    });
    $(document).on("dragleave", function () {
        counter--;
        if (counter === 0) {
            $(".drop-wrap").hide();
        }
    });

    $(document).on("drop", function (event) {
        event.preventDefault();
        $(".drop-wrap").hide();
        switchSides();
        const dataTransfer = event.originalEvent.dataTransfer;

        // Якщо жодних файлів не було перетягнуто
        if (dataTransfer.files.length === 0) {

            const htmlData = dataTransfer.getData('text/html');
            const div = document.createElement('div');
            div.innerHTML = htmlData;
            const img = div.querySelector('img');
            urlToBlob(img.src).then(blob => {
                loadFile(blob);
            });
        } else {
            loadFile(dataTransfer.files[0]);
        }

    });


    async function urlToBlob(url) {
        const response = await fetch(url);
        return await response.blob();
    }


    $("#fileinput").change(function (event) {
        loadFile(event.target.files[0]);
    });

    $('#crop-width').bind('keyup input', function () {
        let w = Number(this.value),
            h;
        if (shapeObj.ratio) {
            h = Math.round(w / shapeObj.ratio);
        } else {
            let coords = cropApi.tellSelect();
            h = Math.round(coords.h);
        }
        changeSelection(w, h);
    });

    $('#crop-height').bind('keyup input', function () {
        let h = Number(this.value),
            w;
        if (shapeObj.ratio) {
            w = Math.round(h * shapeObj.ratio);
        } else {
            let coords = cropApi.tellSelect();
            w = Math.round(coords.w);
        }
        changeSelection(w, h);
    });

    $("input[type=number]").bind('keyup input', function () {
        if (this.value.length > this.maxLength)
            this.value = this.value.slice(0, this.maxLength)
    });

    $('#apply').on('click', function () {
        applyCrop();
    });

    $("#download-png").on("click", function () {
        const link = document.createElement('a');
        link.href = $("#result-image").attr("src");
        link.download = "download.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    function findShapeObj(id) {
        return shapeData.find(shape => shape.shapeForm == id);
    }

    function loadFile(file) {
        checkFile(file, function (isImage) {
            if (isImage) {
                resetOrientation(file, function (resetBase64Image) {
                    picCounter.file = 1;
                    image.src = resetBase64Image;
                    restartJcrop();
                });
            } else {
                alert("Use only jpg, jpeg, webp, png or gif format");
            }
        });
    }

    function checkFile(file, callback) {
        if (file.size >= 10 * 1024 * 1024) {
            alert("Размер файла должен быть не более 10MB");
            return false;
        }
        if (file.size <= .001 * 1024 * 1024) {
            alert("Размер файла должен быть не менее 1kB");
            return false;
        }

        const reader = new FileReader();
        reader.onload = function (event) {
            let isImg;
            if (event.target.readyState === FileReader.DONE) {
                const uint = new Uint8Array(event.target.result);
                const bytes = [];
                uint.forEach((byte) => {
                    bytes.push(byte.toString(16))
                });
                const hex = bytes.join('').toUpperCase();

                isImg = hex === "89504E47" || hex === "47494638" || hex === "FFD8FFE0" || hex === "FFD8FFE1" || hex === "FFD8FFE2" || hex === "FFD8FFDB" || hex === "52494646" || hex === "FFD8FFEB";
            } else {
                isImg = false
            }
            callback(isImg);
        };
        const blob = file.slice(0, 4);
        reader.readAsArrayBuffer(blob);
    }

    function restartJcrop() {
        if (cropApi) {
            cropApi.destroy();
        }
        showCanvas(true);
        const boxWidth = $("#canvas-wrap").width();
        const boxHeight = $("#canvas-wrap").height() - 15;
        $("#canvas-image").Jcrop({
            onSelect: updateCoords,
            onChange: updateCoords,
            boxWidth: boxWidth,
            boxHeight: boxHeight,
            setSelect: [50, 50, 1200, 1200],
            aspectRatio: Number(shapeObj.ratio)
        }, function () {
            cropApi = this;
            controlsActivation(false);
            $("#shape_tracker").css('background-image', `url(/assets/img/svg/${shapeObj.shapeForm}.svg)`);
            $("#shape_tracker").css('background-size', 'contain');
        });
    }

    function showCanvas(switcher) {
        $(".canvas-form").html(switcher ? `<img id="canvas-image" src="${image.src}" alt="" style="display:none;" />` : '').toggle(switcher);
        $("#closeCanvas").parent().toggle(switcher);
        $("#preview").toggle(!switcher);
        $(".upload-form").toggle(!switcher);
        toggleSidebarDisplay(switcher);
    }

    function toggleSidebarDisplay(switcher) {
        const sidebar = document.getElementById("sidebar");

        // Переключаем значение display
        if (switcher) {
            sidebar.style.display = "flex";
        } else {
            sidebar.style.display = "none";
        }
    }


    $("#close-border").on("click", function () {
        $(".border-link.active").removeClass("active");
        const restoreImage = $("#saved-image").attr("src");
        $("#result-image").attr("src", restoreImage).css("transform", "none");
        $("#close-border").hide();

    });

    $('#back-crop').on("click", function () {
        switchSides();
    });

    function switchSides() {
        $(".side.left").css("display", "flex");
        $(".side.right").css("display", "none");
        $("#close-border").css("display", "none");
    }

    function controlsActivation(value) {
        $(".form-control").each(function () {
            $(this).prop('disabled', value);
        });
        $("#apply").prop("disabled", value);
        if (value) {
            $("#crop-width").val('');
            $("#crop-height").val('');
        }
    }

    function resetOrientation(file, callback) {
        const reader = new FileReader();
        reader.onload = e => {
            const img = new Image();
            img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width  = img.naturalWidth;   // ориентация уже учтена
            canvas.height = img.naturalHeight;
            canvas.getContext('2d').drawImage(img, 0, 0);
            callback(canvas.toDataURL('image/jpeg', 0.9)); // EXIF стирается
            };
            img.src = e.target.result;            // dataURL с оригинальным EXIF
        };
        reader.readAsDataURL(file);
    }

    function updateCoords(c) {
        $('#x').val(c.x);
        $('#y').val(c.y);
        $('#w').val(c.w);
        $('#h').val(c.h);
        $("#crop-width").val(Math.round(c.w));
        $("#crop-height").val(Math.round(c.h));
    }

    function changeSelection(w, h) {

        let coords = cropApi.tellSelect(),
            x = Math.round(coords.x),
            y = Math.round(coords.y),
            x2 = x + w,
            y2 = y + h;
        cropApi.setSelect([x, y, x2, y2]);
    }

    function checkImage(imagePath) {
        return new Promise((resolve, reject) => {
            const tempImage = new Image();
            tempImage.addEventListener("load", () => {
                resolve(tempImage);
            });
            tempImage.addEventListener("error", (err) => {
                reject(err);
            });
            tempImage.src = imagePath;
        });
    }

    function saveCrop(src) {
        $('#saved-image').remove();
        const $imgElement = $("<img>", {
            src: src,
            id: "saved-image",
            alt: "saved picture",
            css: {
                display: "none"
            }
        });

        $("body").append($imgElement);
    }

    saveCrop($("#result-image").attr("src"));


    function applyCrop() {
        const tempCanvas = document.createElement('canvas'),
            context = tempCanvas.getContext("2d"),
            coords = cropApi.tellSelect(),
            x = coords.x,
            y = coords.y,
            x2 = coords.x2,
            y2 = coords.y2;
        tempCanvas.width = $('#crop-width').val();
        tempCanvas.height = $('#crop-height').val();

        const shape = new Image();
        const picture = new Image();
        shape.src = `/assets/img/form/${shapeObj.shapeForm}.svg`;
        picture.src = $("#canvas-image").attr("src");
        shape.onload = () => {
            context.drawImage(shape, 0, 0, tempCanvas.width, tempCanvas.height);
            context.globalCompositeOperation = "source-in";
            context.drawImage(picture, x, y, x2, y2, 0, 0, x2, y2);
            const outImg = tempCanvas.toDataURL("image/png");
            saveCrop(outImg);
            $("#result-image").attr("src", outImg);
            $("#result-image").css("transform", "none");
            if ($(window).width() < 990) {
                $(".side.right")[0].scrollIntoView();
            }
            picCounter.crop = 1;
            picCounter.form = shapeObj.shapeForm;
            $(".side.left").css("display", "none");
            $(".side.right").css("display", "flex");
        }
    }

    $(".border-link").click(function (e) {
        e.preventDefault();
        const classNames = $(this).find("i").attr("class");
        $(".border-link.active").removeClass("active");
        $(this).addClass("active");
        const matchedClass = classNames.match(/border-(\d+)/);
        applyBorder(matchedClass[1]);
        $("#close-border").show();
    });

    function applyBorder(number) {
        const tempCanvas = document.createElement('canvas'),
            context = tempCanvas.getContext("2d");

        const imageWidth = $('#saved-image').prop('naturalHeight');


        const border = new Image();
        const picture = new Image();
        border.src = `/assets/img/borders/${number}.png`;
        picture.src = $('#saved-image').attr("src");

        border.onload = () => {

            const borderWidth = imageWidth * border.width / 570;

            const scale = borderWidth / imageWidth;

            const imageCenter = borderWidth / 2 - imageWidth / 2;

            tempCanvas.width = borderWidth;
            tempCanvas.height = borderWidth;

            context.drawImage(picture, imageCenter, imageCenter);

            context.drawImage(border, 0, 0, borderWidth, borderWidth);

            const outImg = tempCanvas.toDataURL("image/png");

            $("#result-image").attr("src", outImg);

            $("#result-image").css("transform", `scale(${scale})`);
            picCounter.border = number;
        }
    }


    $("#dropdownMenuButton").click(function () {
        $(this).next(".dropdown-menu").toggle();
    });

    $(document).on("click", function (event) {
        var target = $(event.target);
        if (!target.is("#dropdownMenuButton") && !target.closest(".dropdown-menu").length) {
            $(".dropdown-menu").hide();
        }
    });

    $(".crop-link").on("click", function (event) {
        event.preventDefault();

        addActiveCrop($(this));
        const id = findShape(this);
        const obj = findShapeObj(id);
        shapeObj.ratio = obj.ratio;
        shapeObj.shapeForm = obj.shapeForm;
        if (image.src != "") {
            restartJcrop();
        }
        $("#shape_tracker").css('background-image', `url(/assets/img/svg/${shapeObj.shapeForm}.svg)`);

    });

    function findShapeActive() {

        const elementClass = $('.croplist-1.active').attr('class');
        const match = elementClass.match(/crop-(\d+)/);

        return match[1];
    }

    function findShape(button) {
        const classNames = $(button).find("i").attr("class");
        const matchedClass = classNames.match(/crop-(\d+)/);
        return matchedClass[1];
    }

    function addActiveCrop(cropLink) {
        $(".crop.active").removeClass("active");
        const iElement = cropLink.find("i");
        iElement.addClass("active");
    }

    $("#load").on("click", function () {
        if (picCounter.file != 0 & picCounter.crop != 0) {
            counterIncrease();
        }

        const imgElement = $("#result-image");
        const imgUrl = imgElement.attr("src");
        const fileName = "image.png"; // Укажите имя файла для сохранения

        fetch(imgUrl)
            .then(response => response.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);

                const a = $("<a>", {
                    href: url,
                    download: fileName,
                    css: {
                        display: "none"
                    }
                }).appendTo("body");

                a[0].click();
                URL.revokeObjectURL(url);
                a.remove();
            })
            .catch(error => {
                console.error("Ошибка при скачивании изображения:", error);
            });
    });

    function counterIncrease() {

        border = picCounter.border;
        form = picCounter.form;

        clearObject(picCounter);

        $.ajax({
            type: "POST",
            url: "/stats/counter.php",
            data: {
                id: 200,
                border: border,
                form: form
            }
        }).done(function (o) {
            //console.log(o);
        });
    }

    function clearObject(obj) {
        for (const key in obj) {
            obj[key] = 0;
        }
    }



    const url = window.location.href;
    const pageSlug = getLastPathSegment(url) ? getLastPathSegment(url) : 'crop-image-square';

    const src = "/assets/img/preview/preset/crop/" + pageSlug +  ".webp";
    urlToBlob(src).then(blob => {
        loadFile(blob);
    });
    
    function getLastPathSegment(url) {
        const path = new URL(url).pathname;
        const parts = path.split('/').filter(Boolean); // filter(Boolean) убирает пустые
        return parts[parts.length - 1] || null;
    }    


    document.querySelectorAll('.crop-link2').forEach(function(elem) {
    elem.addEventListener('click', function() {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        event: 'other-forms-click',
        ariaLabel: this.getAttribute('aria-label')
        });
    });
    });


    function getPreviewImgName(value) {
        const src = $(value).find("img").attr("src");

        // Використовуючи регулярний вираз або інший метод, отримуємо ім'я файлу з src
        const name = src.split("/").pop();
        return name;
    }

});