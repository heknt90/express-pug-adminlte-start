# TODOs:

## API
- Настроить CRUD для добавления новых записей в API

## Видео
- настроить videojs переключение качества видео
- Допилить сервис по генерации видео в формате HLS и встроить в админку

## Frontend
- Настроить webpack для сборки js и стилей
- Сервер запускается отдельно от webpack

## Лэндинг
- Создание примера лэндинга в новой директории проекта
- Реализация платежей
- Версионирование страницы для разных групп пользователей

## Core
- Миддлвары для проверки авторизации, обработки служебной информации, поиск и подставновка email в формы (возможно другой информации)
- Обработка utm-меток
- Реализация A\B тестирования
- Разграничение доступа

## Админка
- Добавить редактирование товаров в админку
- Просмотр списка заказов
- Просмотр списка пользователей
- Добавление видео и постановка в очередь на генерацию

## Тестирование
- Раздел для тестирования страниц (Jest, Puppetier)

## Работа с платежами
- Настроить генерацию цен
- Создать модуль для формирования ордера

## Структура проекта
- Разбить структуру в соответствтии с разделами. Раздел может включать серию лендингов одной тематики
- Каждый раздел должен состоять из файла с роутами, views, свой js и stylesheets
- Общие библиотеки js и css для разных разделов
- Создать админку

## Other
- При поиске товара в списке, если ID отсутствует, то происходит оошибка
- При поиске товара в списке, если к идентификатору добавить букву в конце, то он отбросит ее и найдет по идентификатору приведенному к числу товар (это неправильно)
- Сделать перестроение списка товаров, после удаления без перезагрузки
- Добавить уведомления о успешно выполненных запросах (при сооздании нового товара и при удалении)