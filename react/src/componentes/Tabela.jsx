import './tabelaStyle.css'
function Tabela() {
  

  return (
    <div className="App">
        <h4>Times que tem mais titulos</h4>
            <table>
                <th>Time</th>
                <th>Titulos</th>
                <tr>
                    <td>Palmeiras</td>
                    <td>21</td>
                </tr>
                <tr>
                    <td>Flamengo</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>São Paulo</td>
                    <td>18</td>
                </tr>
                <tr>
                    <td>Santos e Cruzeiro</td>
                    <td>17</td>
                </tr>
                <tr>
                    <td>Corinthians</td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>Gremio</td>
                    <td>14</td>
                </tr>
                <tr>
                    <td>Internacional e Atletico MG</td>
                    <td>11</td>
                </tr>
                <tr>
                    <td>Vasco da Gama</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>Fluminense</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>Atletico Paranaense</td>
                    <td>5</td>
                </tr>
            </table>
    </div>
  )
}

export default Tabela
