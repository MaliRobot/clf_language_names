app.controller('MainController', ['$scope', 'json_fetcher', '$http', function($scope, json_fetcher, $http) { 
    $scope.title = null 
    $scope.search = null;  
    $scope.result = null;
    $scope.lang = null;
    $scope.options = ["Abkhaz", "Acehnese", "Afar", "Afrikaans", "Akan", "Albanian", "Alemannic", "Amharic", "Anglo-Saxon", "Arabic", "Aragonese", "Aramaic", "Armenian", "Aromanian", "Assamese", "Asturian", "Aymara", "Azerbaijani", "Bambara", "Banjar", "Banyumasan", "Bashkir", "Basque", "Bavarian", "Belarusian", "Belarusian Taraskievica Orthography", "Bengali", "Bihari", "Bishnupriya Manipuri", "Bislama", "Bosnian", "Breton", "Buginese", "Bulgarian", "Buryat", "Cantonese", "Catalan", "Cebuano", "Central Bikol", "Central Kurdish", "Chamorro", "Chechen", "Cherokee", "Chewa", "Cheyenne", "Chinese", "Choctaw", "Chuvash", "Classical Chinese", "Cornish", "Corsican", "Cree", "Crimean Tatar", "Croatian", "Czech", "Danish", "Dutch", "Dutch Low Saxon", "Dzongkha", "Egyptian Arabic", "Emiliano-Romagnolo", "English", "Erzya", "Esperanto", "Estonian", "Ewe", "Extremaduran", "Faroese", "Fiji Hindi", "Fijian", "Finnish", "Franco-ProvenÃ§al", "French", "Friulian", "Fula", "Gagauz", "Galician", "Gan", "Georgian", "German", "Gikuyu", "Gilaki", "Gothic", "Greek", "Greenlandic", "Guarani", "Gujarati", "Haitian Creole", "Hakka", "Hausa", "Hawaiian", "Hebrew", "Herero", "Hill Mari", "Hindi", "Hiri Motu", "Hungarian", "Icelandic", "Ido", "Igbo", "Ilokano", "Indonesian", "Interlingua", "Interlingue / Occidental", "Inuktitut", "Inupiat", "Irish", "Italian", "Japanese", "Javanese", "Judaeo-Spanish", "Kabardian Circassian", "Kabyle", "Kalmyk Oirat", "Kannada", "Kanuri", "Kapampangan", "Karachay-Balkar", "Karakalpak", "Kashmiri", "Kashubian", "Kazakh", "Khmer", "Kinyarwanda", "Kirundi", "Komi-Permyak", "Komi-Zyrian", "Kongo", "Korean", "Kwanyama", "Kyrgyz", "Lak", "Lao", "Latgalian", "Latin", "Latvian", "Lezgian", "Ligurian", "Limburgish", "Lingala", "Lithuanian", "Lojban", "Lombard", "Low Saxon", "Lower Sorbian", "Luganda", "Luxembourgish", "Macedonian", "Maithili", "Malagasy", "Malayalam", "Malayan", "Maldivian", "Maltese", "Manx", "Maori", "Marathi", "Marshallese", "Mazanderani", "Meadow Mari", "Min Dong", "Min Nan", "Minangkabau", "Mingrelian", "Mirandese", "Moksha", "Moldovan", "Mongol Khalkha", "Muscogee", "Myanmar", "Nauhatl", "Nauruan", "Navajo", "Ndonga", "Neapolitan", "Nepali", "Newar", "Norfuk Pitkern", "Norman", "North Frisian", "Northern Kurdish", "Northern Sami", "Northern Sotho", "Norwegian Bokmal", "Novial", "Nuosu", "Nynorsk", "Occitan", "Old Church Slavonic", "Oriya", "Oromo", "Ossetian", "Palatine German", "Pali", "Pangasinan", "Papiamento", "Pashto", "Pennsylvania German", "Persian", "Picard", "Piedmontese", "Polish", "Pontic", "Portuguese", "Punjabi", "Ripurian", "Romanian", "Romansh", "Romany", "Russian", "Rusyn", "Sakha", "Samoan", "Samogotian", "Sango", "Sanskrit", "Sardinian", "Saterland Frisian", "Scots", "Scots Gaelic", "Serbian", "Serbo-Croatian", "Shona", "Sicilian", "Silesian", "Simple English", "Sindhi", "Sinhaleze", "Slovak", "Slovene", "Somali", "Sotho", "Southern Quechua", "Spanish", "Sranan Tongo", "Standard Tibetan", "Sundanese", "Swahili", "Swazi", "Swedish", "Tagalog", "Tahitian", "Tajik", "Tamil", "Tarantino", "Tatar", "Telugu", "Tetum", "Thai", "Tigrinya", "Tok Pisin", "Tongan", "Tsonga", "Tswana", "Tumbuka", "Turkish", "Turkmen", "Tuvan", "Twi", "Udmurt", "Ukrainian", "Upper Sorbian", "Urdu", "Uyghur", "Uzbek", "Venda", "Venetian", "Veps", "Vietnamese", "Volapuk", "Voro", "Walloon", "Waray-Waray", "Welsh", "West Flemish", "West Frisian", "Western Punjabi", "Wolof", "Wu", "Xhosa", "Yiddish", "Yoruba", "Zamboanga Chavacano", "Zazaki", "Zeelandic", "Zhuang", "Zulu"];
    $scope.searched = false;
    console.log($scope.search);
    $scope.findValue = function(search) { 
        console.log(search + ' unutar ');
        if (search != null) {
            json_fetcher.lookup_clf(search).then(function(data){
                $scope.result = data;
                $scope.title = search;
            });   
                      
            if ($scope.result != null) {
                $scope.lang = Object.keys($scope.result)[0]; 
            } else {
                $scope.lang == null;
            }
            $scope.searched = true;

            console.log($scope.lang, $scope.title, $scope.result)
        }
    };

    $scope.langDefined = function() {
        if ($scope.searched == true) {
            return ($scope.lang == null);
        }
    }
  
}]);
