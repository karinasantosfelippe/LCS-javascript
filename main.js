/* DESAFIO LCS
*
Descrição:
Encontre a maior substring comum entre as duas strings informadas.
A substring pode ser qualquer parte da string, inclusive ela toda.
Se não houver subseqüência comum, a saída deve ser “0”.
A comparação é case sensitive ('x' != 'X').
*
Entrada:
A entrada contém vários casos de teste.
Cada caso de teste é composto por duas linhas, cada uma contendo uma string.
Ambas strings de entrada contém entre 1 e 50 caracteres ('A'-'Z','a'-'z' ou espaço ' '), inclusive, ou no mínimo uma letra ('A'-'Z','a'-'z').
*
Saída:
O tamanho da maior subsequência comum entre as duas Strings.

Exemplo de Entrada	    Exemplo de Saída
abcdef                      2
cdofhij
TWO                         1
FOUR
abracadabra                 0
open
Hey This java is hot        7
Java is a new paradigm

*/

function LCS(str1, str2)
{
    var tam1 = str1.length,
            tam2 = str2.length,
            resultArray = [],
            i,
            j;
    var cont = 0;

    for (i = 0; i <= tam1; i++) resultArray.push([0]);
    for (j = 0; j < tam2; j++) resultArray[0].push(0);
    for (i = 0; i < tam1; i++) {
        for (j = 0; j < tam2; j++) {
            if(str1[i] === str2[j]){
                resultArray[i+1][j+1] = resultArray[i][j]+1
                if(resultArray[i+1][j+1] > cont){
                    cont = resultArray[i+1][j+1];
                }
            }
            else{
                resultArray[i+1][j+1] = 0
            }
        }
    }
    return cont;
}

var str1 = "ABAB";
var str2 = "BABA";
console.log(LCS(str1, str2));
