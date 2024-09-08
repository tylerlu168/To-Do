let list = [];
let done = [];

function add()
{
    let item = document.getElementById('input').value;

    if(item.length > 0)
    {
        list.push(item);
        done.push(false);
        render();
    }
   
}

function toggle(i)
{
    done[i] = !done[i];
}

function isChecked(i)
{
    if(done[i])
    {
        return 'checked';
    }

    return '';
}

function render()
{
    let out = '<table>';

    for(let i = 0; i < list.length; i++)
    {
        out += '<tr>' +
                    '<td>' + '<input type="checkbox" onClick="toggle(' + i + ')" ' + isChecked(i) + '>' + '</td>' +
                    '<td>' + list[i] + '</td>' +
                '</tr>';
    }
    out += '</table>';

    document.getElementById('output').innerHTML = out;
}