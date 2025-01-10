import type { LangConfigTranslations } from "./interfaces";

export const languageConfig: LangConfigTranslations = {
    pl: {
        ALERT: {
            TITLE_ACCEPTED: 'przyjęte',
            TITLE_REJECTED: 'ODRZUCONY',
            
        },
        START_PAGE: {
            TAP_TO_START: 'DOTKNIJ ABY ROZPOCZĄĆ',
            OR_TAP_TO_START: 'LUB DOTKNIJ ABY ROZPOCZĄĆ',
            ERROR_SERIAL: 'Brak serialu',
        },
        PRODUCT: {
            PRICE_FROM_30_DAYS: "Najnizsza cena w ciagu ostatnich 30 dni",
        },
        HOME_PAGE: {
            NOT_AVALIABLE: 'BRAK',
            MACHINE_EMPTY_TITLE: 'W maszynie nie ma żadnych produktów',
            MACHINE_EMPTY_SUBTITLE: 'Wygląda na to, że produkty nie zostały zdefiniowane w chmurze',
        },
        CONFIRMATION_PRODUCT: {
            TITLE: "Potwierdź swój wybór",
        },
        CART_PAGE: {
            TITLE: 'Twoje zamówienie'
        },
        DISCOUNT_CODE: {
            TITLE: "Czy posiadasz kod rabatowy?",
            DISCOUNT_CODE_ACCEPTED: "Kod rabatowy zaakceptowany",
            DISCOUNT_CODE_DECLINED: "Kod rabatowy odrzucony",
            DISCOUNT_CODE_NO_MATCHING_PRODUCTS:
                "Brak produktów obejmowanych przed ten kod",
            PRODUCT_ALREADY_DISCOUNTED: "Już użyłeś kodu zniżkowego na ten produkt",
            DISCONT_CODE: 'Kod rabatowy'
        },
        FOOTER: {
            TOTAL: 'SUMA:'
        },
        MODAL: {
            TITLE: 'Czy na pewno chcesz zmienić ilość wszystkich produktów w koszyku?',
            SUBTITLE: 'Jeśli w maszynie nie ma wystarczającej ilości produktów, zmienimy ilość na dostępną ilość. Jeżeli nie ma tych produktów, usuniemy je z koszyka.',
        },
        BUTTONS: {
            BACK: 'POWRÓT',
            BUY: 'KUP',
            CANCEL: 'ANULUJ',
            FINISH: 'ZAKOŃCZ',
            APPROVE: 'ZATWIERDŹ',
            STAY: 'ZOSTAŃ',
            REPEAT: 'POWTÓRZ',
            CORRECT_ALL: 'POPRAW',
            YES: 'TAK',
            NO: 'NIE',

        },
        PAYMENT_PAGE: {
            EMPLOYEE_CARD_TITLE: "ZAPŁAĆ PUNKTAMI",
            EMPLOYEE_CARD_TITLE_NO_USER: 'NIE ROZPOZNANO UŻYTKOWNIKA',
            EMPLOYEE_CARD_CREDIT: "Punkty",
            PAYMENT_PAGE_TITLE: "Wybierz metodę płatności",
            CARD_TITLE: 'POSTĘPUJ ZGODNIE Z INFORMACJAMI NA TERMINALU',
            CASH_TITLE: 'PŁACĘ GOTÓWKĄ',
            CASH_SUBTITLE: 'Do zapłaty:',
            CASH_CREDIT: 'Kredyt: ',
            CARD: 'KARTA',
            BLIK: 'BLIK',
            CASH: 'GOTÓWKA',
            QR: 'QR kod',
            CARD_ACCEPTED: 'karta zakceptowana',
            CARD_ACCEPTED_SUBTITLE: 'Oczekiwanie na otrzymanie produktów...',
            CASH_ACCEPTED: 'Przyjęto gotówkę',
            CASH_ACCEPTED_SUBTITLE: 'Oczekiwanie na otrzymanie produktów...',
            CANCELED_TRANSACTION: 'TRANSAKCJA ZOSTAŁA ANULOWANA',
            CANCELED_TRANSACTION_SUBTITLE: 'Aby wrócić, naciśnij POWRÓT',
            SCAN_QR_TITLE: 'Zeskanuj kod QR',
            SCAN_QR_SUBTITLE: 'i przejdź do strony internetowej, aby zapłacić',
            QR_ACCEPTED_TITLE: 'Zatwierdzono płatność QR',
            QR_ACCEPTED_SUBTITLE: 'Proszę czekać na wydanie produktów',
            GO_TO_QR_APP_TITLE: 'PROSIMY ZESKANOWAĆ KOD QR, ABY PRZEJŚĆ DO APLIKACJI',
            GO_TO_QR_APP_SUBTITLE: 'Aby wrócić, naciśnij POWRÓT',
            EMPLOYEE_TITLE: 'Cześć',
            EMPLOYEE_SUBTITLE: 'USER NAME',
            EMPLOYEE_WAIT_SUBLITLE: 'Proszę czekać, sprawdzimy możliwość udostępnienia dla Ciebie',
            EMPLOYEE_SORRY_TITLE: 'Bardzo mi przykro',
            EMPLOYEE_SORRY_SUBTITLE: 'ale nie możesz dostać tych produktów',
            EMPLOYEE_ACCEPTED_SUBTITLE: 'Oczekiwanie na otrzymanie produktów...',

        },
        SERVICE_PAGE: {
            TITLE_SUCCESS: 'Dziękuję',
            TITLE_ERROR: 'Płatność nieudana',
            SUBTITLE_SUCCESS: 'Aby zakończyć, naciśnij ZAKOŃCZ',
            SUBTITLE_ERROR: 'Aby zakończyć, naciśnij ZAKOŃCZ',
            TRANSACTION_CANCELLED_TITLE: 'Transakcja została anulowana',
            TRANSACTION_CANCELLED_SUBTITLE: 'Aby wrócić, naciśnij POWRÓT',
            TRANSACTION_CANCELLED_BTN: 'POWRÓT',
            WARNING_TITLE: 'Nie mogę podać wszystkich produktów',
            ERROR_TITLE: 'Nie mogę podać wszystkich produktów',
            CALL: 'Zadzwoń do nas: +48 *** ** **',
            SUCCESS: 'sukces',
            ERROR: 'błąd',
            TECHNICAL_BREAK_TITLE: 'PRZERWA TECHNICZNA',
            TECHNICAL_BREAK_WARNING: 'BRAK POŁĄCZENIA',
            SERIAL_NUMBER_UNDEFINED: 'Nie można zdefiniować numeru seryjnego',
            SERIAL_NUMBER: 'NUMER SERYJNY',
            NO_CONNECTION: 'BRAK POŁĄCZENIA',
            NO_ANSWER_FROM_TERMINAL: 'Nie można uzyskać odpowiedzi z terminala',
            NO_ANSWER_FROM_EQUIPMENT: 'Nie można uzyskać odpowiedzi z urządzenie',
            NO_ANSWER_FROM_OUTPUT: 'Nie można uzyskać odpowiedzi z mechanizmu wyjściowego',
            LABEL_PCS: ' szt',
            BAD_ANSWER: 'Zła odpowiedź z serwera',
            NO_PRODUCTS: 'Nie można odebrać produktów z maszyny',
            MACHINE_EMPTY_TITLE: 'Maszyna jest pusta',
            MACHINE_EMPTY_SUBTITLE: 'Aby wrócić, naciśnij POWRÓT',
        },
        LOGIN_PAGE: {
            LOGIN: 'WEJDŹ',
            SERVICE_MENU_TITLE: 'Menu serwisowe',
        },
        SETTINGS_PAGE: {
            TERMINAL_SETTINGS: 'Ustawienia terminala',
            PRODUCTS_SETTINGS: 'O urządzeniu',
            MACHINE_CONFIGURATION: 'Konfiguracja maszyny',
            SWIPER_SETTINGS: 'Ustawienia suwaka',
        },
        TIMEOUT_PAGE: {
            TIMEOUT_PAGE_TITLE: "Koniec czasu",
            TIMEOUT_PAGE_SUBTITLE: "Przekierujemy Cię na stronę główną. Aby kontynuować zakupy, naciśnij "
        },
        SOMETHING_WENT_WRONG_PAGE: {
            SOMETHING_WENT_WRONG_TITLE: 'COŚ POSZŁO NIE TAK !',
            SOMETHING_WENT_WRONG_SUBTITLE: 'Aby powrócić, kliknij „POWRÓT”.',
            CANCELED_TITLE: 'Płatność została anulowana',
            CANCELED_SUBTITLE: 'Aby wrócić, naciśnij POWRÓT',
            CONNECTION_ERROR_TERMINAL_TITLE: 'Nie ma połączenia z terminalem',
            CONNECTION_ERROR_TERMINAL_SUBTITLE: 'Proszę dać mi znać o tym problemie. Postaramy się rozwiązać ten problem tak szybko, jak to możliwe',
            TRANSACTION_REJECTED_TITLE: 'Transakcja została odrzucona',
            TRANSACTION_REJECTED_SUBTITLE: 'Aby wrócić, naciśnij POWRÓT',
            COMMUNICATION_REJECTED_TITLE: 'Komunikacja została odrzucona',
            COMMUNICATION_REJECTED_SUBTITLE: 'Aby wrócić, naciśnij POWRÓT',
            FINISH_TRANSACTION_ERROR_TITLE: 'Zakończenie transakcji zakończyło się błędem',
            FINISH_TRANSACTION_ERROR_SUBTITLE: 'Aby wrócić, naciśnij POWRÓT',
        },
        WAITING_PAGE: {
            LOADER_TEXT: 'Proszę czekać',
            TITLE: 'Maszyna jest zajęta',
            SUBTITLE: 'Maszyna jest w trakcie realizacji u innego klienta. Jesteś w kolejce.',
        },
        EMAIL_CONFIRMATION_PAGE: {
            EMAIL: 'E-mail',
            SEND: 'WYSŁAĆ',
            TITLE: 'Aby otrzymać e-mail potwierdzenie',
            SUBTITLE: 'proszę wypełnić pole e-mail i wysłać do nas.',
            SENDING_ERROR_TITLE: 'BŁĄD',
            SENDING_ERROR_SUBTITLE: 'Coś poszło nie tak',
            SENDING_SUCCESS_TITLE: 'SUKCES',
            SENDING_SUCCESS_SUBTITLE: 'Za kilka chwil otrzymasz wiadomość e-mail',
        }
    },
    en: {
        START_PAGE: {
            TAP_TO_START: 'TAP TO START',
            OR_TAP_TO_START: 'OR TAP TO START',
            ERROR_SERIAL: 'No serial',
        },
        PRODUCT: {
            PRICE_FROM_30_DAYS: 'Lowest price in the last 30 days',
        },
        HOME_PAGE: {
            NOT_AVALIABLE: 'NOT AVAILABLE',
            MACHINE_EMPTY_TITLE: 'There are no products in the machine',
            MACHINE_EMPTY_SUBTITLE: 'It seems that the products have not been defined in the cloud',

        },
        CONFIRMATION_PRODUCT: {
            TITLE: "Confirm your choice",
        },
        CART_PAGE: {
            TITLE: 'Your order'
        },
        DISCOUNT_CODE: {
            TITLE: 'Do you have a discount code?',
            DISCOUNT_CODE_ACCEPTED: 'Discount code accepted',
            DISCOUNT_CODE_DECLINED: 'Discount code declined',
            DISCOUNT_CODE_NO_MATCHING_PRODUCTS: 'No products covered by this code',
            PRODUCT_ALREADY_DISCOUNTED: 'You have already used a discount code on this product',
            DISCONT_CODE: 'Discount code'
        },
        FOOTER: {
            TOTAL: 'TOTAL:'
        },
        MODAL: {
            TITLE: 'Are you sure you want to change the quantity of all products in the cart?',
            SUBTITLE: 'If the machine does not have enough products, we will adjust the quantity to the available amount. If there are none, they will be removed from the cart.',
        },
        BUTTONS: {
            BACK: 'BACK',
            BUY: 'BUY',
            CANCEL: 'CANCEL',
            FINISH: 'FINISH',
            APPROVE: 'APPROVE',
            STAY: 'STAY',
            REPEAT: 'REPEAT',
            CORRECT_ALL: 'CORRECT',
            YES: 'YES',
            NO: 'NO',
        },
        PAYMENT_PAGE: {
            EMPLOYEE_CARD_TITLE: 'PAY WITH POINTS',
            EMPLOYEE_CARD_TITLE_NO_USER: 'USER NOT RECOGNIZED',
            EMPLOYEE_CARD_CREDIT: 'Points',
            PAYMENT_PAGE_TITLE: 'Select a payment method',
            CARD_TITLE: 'FOLLOW THE INSTRUCTIONS ON THE TERMINAL',
            CASH_TITLE: 'PAY WITH CASH',
            CASH_SUBTITLE: 'Amount due:',
            CASH_CREDIT: 'Credit: ',
            CARD: 'CARD',
            BLIK: 'BLIK',
            CASH: 'CASH',
            QR: 'QR code',
            CARD_ACCEPTED: 'Card accepted',
            CARD_ACCEPTED_SUBTITLE: 'Waiting to receive products...',
            CASH_ACCEPTED: 'Cash accepted',
            CASH_ACCEPTED_SUBTITLE: 'Waiting to receive products...',
            CANCELED_TRANSACTION: 'TRANSACTION CANCELED',
            CANCELED_TRANSACTION_SUBTITLE: 'To return, press BACK',
            SCAN_QR_TITLE: 'Scan QR code',
            SCAN_QR_SUBTITLE: 'and go to the website to pay',
            QR_ACCEPTED_TITLE: 'QR payment accepted',
            QR_ACCEPTED_SUBTITLE: 'Please wait for product dispensing',
            GO_TO_QR_APP_TITLE: 'PLEASE SCAN THE QR CODE TO OPEN THE APP',
            GO_TO_QR_APP_SUBTITLE: 'To return, press BACK',
            EMPLOYEE_TITLE: 'Hello',
            EMPLOYEE_SUBTITLE: 'USER NAME',
            EMPLOYEE_WAIT_SUBLITLE: 'Please wait while we check availability for you',
            EMPLOYEE_SORRY_TITLE: 'I am sorry',
            EMPLOYEE_SORRY_SUBTITLE: 'but you cannot receive these products',
            EMPLOYEE_ACCEPTED_SUBTITLE: 'Waiting to receive products...'
        },
        SERVICE_PAGE: {
            TITLE_SUCCESS: 'Thank you',
            TITLE_ERROR: 'Payment failed',
            SUBTITLE_SUCCESS: 'To finish, press FINISH',
            SUBTITLE_ERROR: 'To finish, press FINISH',
            TRANSACTION_CANCELLED_TITLE: 'Transaction canceled',
            TRANSACTION_CANCELLED_SUBTITLE: 'To return, press BACK',
            TRANSACTION_CANCELLED_BTN: 'BACK',
            WARNING_TITLE: 'Unable to provide all products',
            ERROR_TITLE: 'Unable to provide all products',
            CALL: 'Call us: +48 *** ** **',
            SUCCESS: 'success',
            ERROR: 'error',
            TECHNICAL_BREAK_TITLE: 'TECHNICAL BREAK',
            TECHNICAL_BREAK_WARNING: 'NO CONNECTION',
            SERIAL_NUMBER_UNDEFINED: 'Unable to define serial number',
            SERIAL_NUMBER: 'SERIAL NUMBER',
            NO_CONNECTION: 'NO CONNECTION',
            NO_ANSWER_FROM_TERMINAL: 'No response from terminal',
            NO_ANSWER_FROM_EQUIPMENT: 'No response from equipment',
            NO_ANSWER_FROM_OUTPUT: 'No response from output mechanism',
            LABEL_PCS: ' pcs',
            BAD_ANSWER: 'Bad server response',
            NO_PRODUCTS: 'Unable to retrieve products from machine',
            MACHINE_EMPTY_TITLE: 'The machine is empty',
            MACHINE_EMPTY_SUBTITLE: 'To return, press BACK'
        },
        LOGIN_PAGE: {
            LOGIN: 'LOGIN',
            SERVICE_MENU_TITLE: 'Service Menu'
        },
        SETTINGS_PAGE: {
            TERMINAL_SETTINGS: 'Terminal Settings',
            PRODUCTS_SETTINGS: 'About the device',
            MACHINE_CONFIGURATION: 'Machine Configuration',
            SWIPER_SETTINGS: 'Swiper settings',
        },
        TIMEOUT_PAGE: {
            TIMEOUT_PAGE_TITLE: 'Timeout',
            TIMEOUT_PAGE_SUBTITLE: 'You will be redirected to the home page. To continue shopping, press '
        },
        SOMETHING_WENT_WRONG_PAGE: {
            SOMETHING_WENT_WRONG_TITLE: 'SOMETHING WENT WRONG!',
            SOMETHING_WENT_WRONG_SUBTITLE: 'To return, click BACK.',
            CANCELED_TITLE: 'Payment was canceled',
            CANCELED_SUBTITLE: 'To return, press BACK',
            CONNECTION_ERROR_TERMINAL_TITLE: 'No connection with terminal',
            CONNECTION_ERROR_TERMINAL_SUBTITLE: 'Please let us know about this issue. We will try to resolve it as soon as possible',
            TRANSACTION_REJECTED_TITLE: 'Transaction rejected',
            TRANSACTION_REJECTED_SUBTITLE: 'To return, press BACK',
            COMMUNICATION_REJECTED_TITLE: 'Communication rejected',
            COMMUNICATION_REJECTED_SUBTITLE: 'To return, press BACK',
            FINISH_TRANSACTION_ERROR_TITLE: 'Transaction completion error',
            FINISH_TRANSACTION_ERROR_SUBTITLE: 'To return, press BACK'
        },
        WAITING_PAGE: {
            LOADER_TEXT: 'Please wait',
            TITLE: 'The machine is busy',
            SUBTITLE: 'The machine is serving another customer. You are in queue.'
        },
        EMAIL_CONFIRMATION_PAGE: {
            EMAIL: 'E-mail',
            SEND: 'Send',
            TITLE: 'To receive an email confirmation',
            SUBTITLE: 'please fill out the email field and send it to us.',
            SENDING_ERROR_TITLE: 'ERROR',
            SENDING_ERROR_SUBTITLE: 'Something went wrong',
            SENDING_SUCCESS_TITLE: 'SUCCESS',
            SENDING_SUCCESS_SUBTITLE: 'You will receive an email shortly',
        }
    },
    de: {
        START_PAGE: {
            TAP_TO_START: 'TIPPEN UM ZU STARTEN',
            OR_TAP_TO_START: 'ODER TIPPEN UM ZU STARTEN',
            ERROR_SERIAL: 'Kein Seriennummer',
        },
        PRODUCT: {
            PRICE_FROM_30_DAYS: 'Niedrigster Preis in den letzten 30 Tagen',
        },
        HOME_PAGE: {
            NOT_AVALIABLE: 'NICHT VERFÜGBAR',
            MACHINE_EMPTY_TITLE: 'In der Maschine befinden sich keine Produkte',
            MACHINE_EMPTY_SUBTITLE: 'Es scheint, dass die Produkte nicht in der Cloud definiert wurden',

        },
        CONFIRMATION_PRODUCT: {
            TITLE: "Bestätigen Sie Ihre Auswahl",
        },
        CART_PAGE: {
            TITLE: 'Ihre Bestellung'
        },
        DISCOUNT_CODE: {
            TITLE: 'Haben Sie einen Rabattcode?',
            DISCOUNT_CODE_ACCEPTED: 'Rabattcode akzeptiert',
            DISCOUNT_CODE_DECLINED: 'Rabattcode abgelehnt',
            DISCOUNT_CODE_NO_MATCHING_PRODUCTS: 'Keine Produkte für diesen Code',
            PRODUCT_ALREADY_DISCOUNTED: 'Sie haben bereits einen Rabattcode für dieses Produkt verwendet',
            DISCONT_CODE: 'Rabattcode'
        },
        FOOTER: {
            TOTAL: 'GESAMT:'
        },
        MODAL: {
            TITLE: 'Möchten Sie wirklich die Menge aller Produkte im Warenkorb ändern?',
            SUBTITLE: 'Wenn die Maschine nicht genug Produkte hat, passen wir die Menge an. Wenn es keine gibt, werden sie aus dem Warenkorb entfernt.',
        },
        BUTTONS: {
            BACK: 'ZURÜCK',
            BUY: 'KAUFEN',
            CANCEL: 'STORNIEREN',
            FINISH: 'BEENDEN',
            APPROVE: 'BESTÄTIGEN',
            STAY: 'BLEIBEN',
            REPEAT: 'WIEDERHOLEN',
            CORRECT_ALL: 'KORRIGIEREN',
            YES: 'JA',
            NO: 'NEIN',
        },
        PAYMENT_PAGE: {
            EMPLOYEE_CARD_TITLE: 'MIT PUNKTEN BEZAHLEN',
            EMPLOYEE_CARD_TITLE_NO_USER: 'BENUTZER NICHT ERKANNT',
            EMPLOYEE_CARD_CREDIT: 'Punkte',
            PAYMENT_PAGE_TITLE: 'Wählen Sie eine Zahlungsmethode oder halten Sie Ihre Mitarbeiterkarte an',
            CARD_TITLE: 'FOLGEN SIE DEN ANWEISUNGEN AM TERMINAL',
            CASH_TITLE: 'BAR ZAHLEN',
            CASH_SUBTITLE: 'Zu zahlen:',
            CASH_CREDIT: 'Guthaben: ',
            CARD: 'KARTE',
            BLIK: 'BLIK',
            CASH: 'BARGELD',
            QR: 'QR-Code',
            CARD_ACCEPTED: 'Karte akzeptiert',
            CARD_ACCEPTED_SUBTITLE: 'Warten auf Produkte...',
            CASH_ACCEPTED: 'Bargeld akzeptiert',
            CASH_ACCEPTED_SUBTITLE: 'Warten auf Produkte...',
            CANCELED_TRANSACTION: 'TRANSAKTION ABGEBROCHEN',
            CANCELED_TRANSACTION_SUBTITLE: 'Zum Zurückkehren, drücken Sie ZURÜCK',
            SCAN_QR_TITLE: 'QR-Code scannen',
            SCAN_QR_SUBTITLE: 'und auf die Website gehen, um zu bezahlen',
            QR_ACCEPTED_TITLE: 'QR-Zahlung akzeptiert',
            QR_ACCEPTED_SUBTITLE: 'Bitte warten auf Produkte',
            GO_TO_QR_APP_TITLE: 'BITTE SCANNEN SIE DEN QR-CODE UM ZUR APP ZU GELANGEN',
            GO_TO_QR_APP_SUBTITLE: 'Zum Zurückkehren, drücken Sie ZURÜCK',
            EMPLOYEE_TITLE: 'Hallo',
            EMPLOYEE_SUBTITLE: 'BENUTZERNAME',
            EMPLOYEE_WAIT_SUBLITLE: 'Bitte warten, während wir die Verfügbarkeit überprüfen',
            EMPLOYEE_SORRY_TITLE: 'Es tut mir leid',
            EMPLOYEE_SORRY_SUBTITLE: 'aber Sie können diese Produkte nicht erhalten',
            EMPLOYEE_ACCEPTED_SUBTITLE: 'Warten auf Produkte...'
        },
        SERVICE_PAGE: {
            TITLE_SUCCESS: 'Danke',
            TITLE_ERROR: 'Zahlung fehlgeschlagen',
            SUBTITLE_SUCCESS: 'Zum Beenden, drücken Sie BEENDEN',
            SUBTITLE_ERROR: 'Zum Beenden, drücken Sie BEENDEN',
            TRANSACTION_CANCELLED_TITLE: 'Transaktion abgebrochen',
            TRANSACTION_CANCELLED_SUBTITLE: 'Zum Zurückkehren, drücken Sie ZURÜCK',
            TRANSACTION_CANCELLED_BTN: 'ZURÜCK',
            WARNING_TITLE: 'Kann nicht alle Produkte liefern',
            ERROR_TITLE: 'Kann nicht alle Produkte liefern',
            CALL: 'Rufen Sie uns an: +48 *** ** **',
            SUCCESS: 'Erfolg',
            ERROR: 'Fehler',
            TECHNICAL_BREAK_TITLE: 'TECHNISCHE PAUSE',
            TECHNICAL_BREAK_WARNING: 'KEINE VERBINDUNG',
            SERIAL_NUMBER_UNDEFINED: 'Seriennummer nicht definiert',
            SERIAL_NUMBER: 'SERIENNUMMER',
            NO_CONNECTION: 'KEINE VERBINDUNG',
            NO_ANSWER_FROM_TERMINAL: 'Keine Antwort vom Terminal',
            NO_ANSWER_FROM_EQUIPMENT: 'Keine Antwort von der Ausrüstung',
            NO_ANSWER_FROM_OUTPUT: 'Keine Antwort vom Ausgabemechanismus',
            LABEL_PCS: ' Stk',
            BAD_ANSWER: 'Falsche Serverantwort',
            NO_PRODUCTS: 'Produkte konnten nicht aus dem Automaten entnommen werden',
            MACHINE_EMPTY_TITLE: 'Der Automat ist leer',
            MACHINE_EMPTY_SUBTITLE: 'Zum Zurückkehren, drücken Sie ZURÜCK'
        },
        LOGIN_PAGE: {
            LOGIN: 'EINLOGGEN',
            SERVICE_MENU_TITLE: 'Servicemenü'
        },
        SETTINGS_PAGE: {
            TERMINAL_SETTINGS: 'Terminaleinstellungen',
            PRODUCTS_SETTINGS: 'Über das Gerät',
            MACHINE_CONFIGURATION: 'Maschinenkonfiguration'
        },
        TIMEOUT_PAGE: {
            TIMEOUT_PAGE_TITLE: 'Zeit abgelaufen',
            TIMEOUT_PAGE_SUBTITLE: 'Sie werden zur Startseite weitergeleitet. Zum Fortsetzen der Einkäufe, drücken Sie '
        },
        SOMETHING_WENT_WRONG_PAGE: {
            SOMETHING_WENT_WRONG_TITLE: 'ETWAS IST SCHIEF GELAUFEN!',
            SOMETHING_WENT_WRONG_SUBTITLE: 'Zum Zurückkehren, klicken Sie ZURÜCK.',
            CANCELED_TITLE: 'Zahlung abgebrochen',
            CANCELED_SUBTITLE: 'Zum Zurückkehren, drücken Sie ZURÜCK',
            CONNECTION_ERROR_TERMINAL_TITLE: 'Keine Verbindung zum Terminal',
            CONNECTION_ERROR_TERMINAL_SUBTITLE: 'Bitte informieren Sie uns über dieses Problem. Wir werden es so schnell wie möglich beheben',
            TRANSACTION_REJECTED_TITLE: 'Transaktion abgelehnt',
            TRANSACTION_REJECTED_SUBTITLE: 'Zum Zurückkehren, drücken Sie ZURÜCK',
            COMMUNICATION_REJECTED_TITLE: 'Kommunikation abgelehnt',
            COMMUNICATION_REJECTED_SUBTITLE: 'Zum Zurückkehren, drücken Sie ZURÜCK',
            FINISH_TRANSACTION_ERROR_TITLE: 'Fehler beim Abschluss der Transaktion',
            FINISH_TRANSACTION_ERROR_SUBTITLE: 'Zum Zurückkehren, drücken Sie ZURÜCK'
        },
        WAITING_PAGE: {
            LOADER_TEXT: 'Bitte warten',
            TITLE: 'Der Automat ist beschäftigt',
            SUBTITLE: 'Der Automat bedient einen anderen Kunden. Sie sind in der Warteschlange.'
        },
        EMAIL_CONFIRMATION_PAGE: {
            EMAIL: 'E-mail',
            SEND: 'Senden',
            TITLE: 'Um eine E-Mail-Bestätigung zu erhalten',
            SUBTITLE: 'bitte füllen Sie das E-Mail-Feld aus und senden Sie es an uns.',
            SENDING_ERROR_TITLE: 'FEHLER',
            SENDING_ERROR_SUBTITLE: 'Etwas ist schief gelaufen',
            SENDING_SUCCESS_TITLE: 'ERFOLG',
            SENDING_SUCCESS_SUBTITLE: 'Sie erhalten in Kürze eine E-Mail',
        }
    },
    fr: {
        START_PAGE: {
            TAP_TO_START: 'TOUCHEZ POUR COMMENCER',
        },
        HOME_PAGE: {
            MACHINE_EMPTY_TITLE: "Il n'y a aucun produit dans la machine",
            MACHINE_EMPTY_SUBTITLE: "Il semble que les produits n'aient pas été définis dans le cloud",
        },
        CONFIRMATION_PRODUCT: {
            TITLE: "Confirmez votre choix",
        },
        CART_PAGE: {
            TITLE: 'Vos commandes'
        },
        PRODUCT: {
            PRICE_FROM_30_DAYS: "Prix ​​le plus bas des 30 derniers jours",
        },
        DISCOUNT_CODE: {
            TITLE: "Avez-vous un code de réduction?",
            DISCOUNT_CODE_ACCEPTED: "Code de réduction accepté",
            DISCOUNT_CODE_DECLINED: "Code de réduction refusé",
            DISCOUNT_CODE_NO_MATCHING_PRODUCTS:
                "Il n'y a aucun produit couvert par ce code",
            PRODUCT_ALREADY_DISCOUNTED:
                "Vous avez déjà utilisé un code de réduction pour ce produit",
        },
        FOOTER: {
            TOTAL: 'Total:'
        },
        BUTTONS: {
            BACK: 'RETOUR',
            BUY: 'ACHETER',
            CANCEL: 'ANNULER',
            FINISH: 'TERMINER'
        },
        PAYMENT_PAGE: {
            EMPLOYEE_CARD_CREDIT: "Points",
            PAYMENT_PAGE_TITLE: "Sélectionnez un mode de paiement ou présentez votre carte d'employé",
            CARD_TITLE: 'SUIVEZ LES INFORMATIONS SUR LE TERMINAL',
            CASH_TITLE: 'PAYER EN ESPÈCES',
            CASH_SUBTITLE: 'À payer:'
        },
        SERVICE_PAGE: {
            TITLE_SUCCESS: 'Paiement réussi',
            TITLE_ERROR: 'Échec du paiement',
            SUBTITLE_SUCCESS: 'Pour terminer, appuyez sur TERMINER',
            SUBTITLE_ERROR: 'Pour terminer, appuyez sur TERMINER',
        },
        LOGIN_PAGE: {
            LOGIN: 'CONNEXION',
            SERVICE_MENU_TITLE: 'Menu de service',
        },
        SETTINGS_PAGE: {
            TERMINAL_SETTINGS: 'Paramètres du terminal'
        },
        EMAIL_CONFIRMATION_PAGE: {
            EMAIL: 'E-mail',
            SEND: 'Envoyer',
            TITLE: 'Pour recevoir une confirmation par e-mail',
            SUBTITLE: "veuillez remplir le champ e-mail et nous l'envoyer.",
            SENDING_ERROR_TITLE: 'ERREUR',
            SENDING_ERROR_SUBTITLE: 'Quelque chose s\'est mal passé',
            SENDING_SUCCESS_TITLE: 'SUCCÈS',
            SENDING_SUCCESS_SUBTITLE: 'Vous recevrez un e-mail dans quelques instants',
        }
    },
    ua: {
        START_PAGE: {
            TAP_TO_START: 'ТАП, ЩОБ ПОЧАТИ',
        },
        HOME_PAGE: {
            MACHINE_EMPTY_TITLE: 'У машині немає жодних продуктів',
            MACHINE_EMPTY_SUBTITLE: 'Схоже, що продукти не були визначені в хмарі',
        },
        CONFIRMATION_PRODUCT: {
            TITLE: "Підтвердьте свій вибір",
        },
        CART_PAGE: {
            TITLE: 'Ваші замовлення'
        },
        DISCOUNT_CODE: {
            TITLE: "У вас є код знижки?",
            DISCOUNT_CODE_ACCEPTED: "Код знижки приймається",
            DISCOUNT_CODE_DECLINED: "код знижки відхилено",
            DISCOUNT_CODE_NO_MATCHING_PRODUCTS:
                "Немає продуктів, на які поширюється цей код",
            PRODUCT_ALREADY_DISCOUNTED: "Ви вже використали код знижки на цей товар",
        },
        PRODUCT: {
            PRICE_FROM_30_DAYS: "Найнижча ціна за останні 30 днів",
        },
        FOOTER: {
            TOTAL: 'Усього:'
        },
        BUTTONS: {
            BACK: 'НАЗАД',
            BUY: 'КУПИТИ',
            CANCEL: 'СКАСУВАТИ',
            FINISH: 'ЗАВЕРШИТИ'
        },
        PAYMENT_PAGE: {
            EMPLOYEE_CARD_CREDIT: "Очки",
            PAYMENT_PAGE_TITLE: "Виберіть спосіб оплати або пред'явіть картку співробітника",
            CARD_TITLE: 'СЛІДКУЙТЕ ЗА ІНФОРМАЦІЄЮ НА ТЕРМІНАЛІ',
            CASH_TITLE: 'СПЛАТИТИ ГОТІВКОЮ',
            CASH_SUBTITLE: 'До оплати:'
        },
        SERVICE_PAGE: {
            TITLE_SUCCESS: 'Успішна оплата',
            TITLE_ERROR: 'Помилка оплати',
            SUBTITLE_SUCCESS: 'Для завершення натисніть ЗАВЕРШИТИ',
            SUBTITLE_ERROR: 'Для завершення натисніть ЗАВЕРШИТИ',
        },
        LOGIN_PAGE: {
            LOGIN: 'УВІЙТИ',
            SERVICE_MENU_TITLE: 'Сервісне меню',
        },
        SETTINGS_PAGE: {
            TERMINAL_SETTINGS: 'Налаштування терміналу'
        },
        EMAIL_CONFIRMATION_PAGE: {
            EMAIL: 'Електронна пошта',
            SEND: 'Надіслати',
            TITLE: 'Щоб отримати підтвердження електронною поштою',
            SUBTITLE: 'будь ласка, заповніть поле електронної пошти та надішліть його нам.',
            SENDING_ERROR_TITLE: 'ПОМИЛКА',
            SENDING_ERROR_SUBTITLE: 'Щось пішло не так',
            SENDING_SUCCESS_TITLE: 'УСПІХ',
            SENDING_SUCCESS_SUBTITLE: 'Ви отримаєте електронний лист через кілька хвилин',
        }
    }
}