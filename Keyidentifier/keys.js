const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class="colors">
  <table style="border:2px solid black; border-right:2px solid black;">
  <tr>
    <th style=" border:1px solid black;">key</th>
    <th style=" border:1px solid black;">keycode</th>
    <th style=" border:1px solid black;">Code</th>
  </tr>
  <tr>
    <td style=" border:1px solid black;">${
      e.key === ' ' ? 'Spacebar' : e.key
    }</td>
    <td style=" border:1px solid black;">${e.keyCode}</td>
    <td style=" border:1px solid black;">${e.code}</td>
  </tr>
</table>
</div>
  `;
});
