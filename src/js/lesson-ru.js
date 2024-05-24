const lessons = [
  {
    id: 1, title: 'Урок 1: Пешка', content: ['Пешка - самая распространённая фигура, так как у каждого игрока по 8 пешек. Они располагаются во втором ряду. Пешка ходит только вперёд на одну клетку, за исключением первого хода, когда она может пойти на две клетки вперёд. Пешка атакует фигуры, находящиеся на одну клетку по диагонали от неё. Несмотря на свою слабость, пешка может превратиться в любую съеденную фигуру, достигнув противоположного конца доски.'], chess: [{ cell: 53, element: 'wp' }],
  },
  {
    id: 2, title: 'Урок 2: Ладья', content: ['Ладья ходит по горизонтали и вертикали на любое количество клеток. Она начинает игру в углах доски. Ладья - мощная фигура, благодаря её длинным ходам по линиям.'], chess: [{ cell: 28, element: 'wr' }],
  },
  {
    id: 3, title: 'Урок 3: Конь', content: ['Конь движется буквой "Г": две клетки в одном направлении и одна клетка перпендикулярно. Он единственная фигура, которая может перепрыгивать через другие фигуры, то есть, конь может двигаться на свою целевую клетку, даже если между начальной и конечной клетками есть другие фигуры. Конь начинает игру рядом с ладьями.'], chess: [{ cell: 36, element: 'wn' }],
  },
  {
    id: 4, title: 'Урок 4: Слон', content: ['Слон ходит по диагонали на любое количество клеток. У каждого игрока два слона: один ходит по светлым клеткам, другой - по тёмным. Слон начинает игру между конём и ферзём/королём'], chess: [{ cell: 28, element: 'wb' }, { cell: 45, element: 'wb' }],
  },
  {
    id: 5, title: 'Урок 5: Ферзь', content: ['Ферзь - самая сильная фигура, она может ходить как по горизонтали и вертикали, так и по диагонали на любое количество клеток. Ферзь начинает игру рядом с королём (у белых на белой клетке, у чёрных - на чёрной).'], chess: [{ cell: 30, element: 'wq' }],
  },
  {
    id: 6, title: 'Урок 7: Король', content: ['Король - самая важная фигура, хотя и слабая по своим ходам. Он может ходить на одну клетку в любом направлении (вперёд, назад, влево, вправо и по диагонали). Цель игры - поставить мат королю противника, то есть, создать ситуацию, когда король находится под шахом и не может сделать ни одного хода, чтобы выйти из-под шаха.'], chess: [{ cell: 60, element: 'wk' }],
  },
  {
    id: 7, title: 'Урок 7: Победа', content: ['Шах и мат: Победа достигается, когда король противника находится под шахом и не может сделать ни одного хода, чтобы выйти из-под шаха.'], chess: [{ cell: 62, element: 'wk' }, { cell: 63, element: 'wr' }],
  },
  {
    id: 8, title: 'Урок 8: Поражение', content: ['Сдача: Игрок может добровольно сдаться, если считает свою позицию безнадёжной. • Время: В играх с контролем времени игрок, у которого заканчивается время, автоматически проигрывает, если у противника есть достаточное количество фигур для постановки мата.• Мат: Вам поставили мат'], chess: [{ cell: 20, element: 'wp' }, { cell: 36, element: 'bp' }],
  },
  {
    id: 9, title: 'Урок 9: Ничья', content: ['1. Пат: Когда игрок, чей ход, не может сделать ни одного законного хода, и его король не находится под шахом. 2. Трёхкратное повторение: Если одна и та же позиция повторяется три раза с одинаковыми возможностями ходов для обеих сторон. 3. Правило 50 ходов: Если за последние 50 ходов ни одна из сторон не двигала пешку и не взяла фигуру. 4. Невозможный мат: Если у обеих сторон недостаточно фигур для постановки мата (например, король против короля или король и слон против короля). '],
  },
  {
    id: 10, title: 'Урок 1,1: Превращение пешки', content: ['У пешки особый способ съесть фигуру, она ест, только когда фигура соперника по диагонали от пешки.'], chess: [{ cell: 56, element: 'wp' }],
  },
  {
    id: 11, title: 'Урок 1.2: Пешка на краю доски', content: ['Когда пешка достигает последней горизонтали, она может быть превращена в любую другую фигуру, кроме короля.'], chess: [{ cell: 56, element: 'wp' }],
  },

  {
    id: 12, title: 'Урок 1.2: Пешка на краю доски', content: ['Когда пешка достигает последней горизонтали, она может быть превращена в любую другую фигуру, кроме короля.'], chess: [{ cell: 56, element: 'wp' }],
  },
  {
    id: 13, title: 'Урок 1.2: Пешка на краю доски', content: ['Когда пешка достигает последней горизонтали, она может быть превращена в любую другую фигуру, кроме короля.'], chess: [{ cell: 56, element: 'wp' }],
  },
];

window.Storage = lessons;
