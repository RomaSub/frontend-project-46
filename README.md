### Hexlet tests and linter status:
[![Actions Status](https://github.com/Roma1731/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Roma1731/frontend-project-46/actions)
[![Node CI](https://github.com/Roma1731/frontend-project-46/actions/workflows/my-tests.yml/badge.svg)](https://github.com/Roma1731/frontend-project-46/actions/workflows/my-tests.yml)
<a href="https://codeclimate.com/github/Roma1731/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/355c69064299d055c57c/maintainability" /></a>
<a href="https://codeclimate.com/github/Roma1731/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/355c69064299d055c57c/test_coverage" /></a>

**Описание проекта**<br>
Вычислитель отличий — это консольное приложение, представляющее из себя программу, которая определяет разницу между двумя структурами данных. Утилита поддерживает входные форматы yaml и json, парсит и обрабатывает данные из них и выводит результат в форматах plain text, stylish и json.

## Установка
```bash
make install
npm link
```

## Примеры
<h3>Шаг 2</h3>

```bash
gendiff -h
```
[![asciicast](https://asciinema.org/a/UWZuNBoCQvcZTD4ejZtAatpZE.svg)](https://asciinema.org/a/UWZuNBoCQvcZTD4ejZtAatpZE)

<h3>Шаг 3</h3>

```bash
gendiff -h
gendiff file1.json file2.json
```
[![asciicast](https://asciinema.org/a/xFrgNqzjHnfyfO56UrYZFC6PT.svg)](https://asciinema.org/a/xFrgNqzjHnfyfO56UrYZFC6PT)

<h3>Шаг 5</h3>

```bash
gendiff -h
gendiff file1.json file2.json
gendiff file1.yml file2.yml
```
[![asciicast](https://asciinema.org/a/xFrgNqzjHnfyfO56UrYZFC6PT.svg)](https://asciinema.org/a/xFrgNqzjHnfyfO56UrYZFC6PT)

<h3>Шаг 6</h3>

```bash
gendiff file3.yml file4.yml
gendiff -f stylish file3.yml file4.yml
```
[![asciicast](https://asciinema.org/a/8krkrNlGJEvzmsCMqw1MjX4q6.svg)](https://asciinema.org/a/8krkrNlGJEvzmsCMqw1MjX4q6)

<h3>Шаг 7</h3>

```bash
gendiff -f plain file1.json file2.json
```
[![asciicast](https://asciinema.org/a/XcexDD8J7GDAr5nqCnJlJpq89.svg)](https://asciinema.org/a/XcexDD8J7GDAr5nqCnJlJpq89)

<h3>Шаг 8</h3>

```bash
gendiff -f json file1.json file2.json
```
[![asciicast](https://asciinema.org/a/uLQqTjesWwpYzx1KKAbHXTuxQ.svg)](https://asciinema.org/a/uLQqTjesWwpYzx1KKAbHXTuxQ)