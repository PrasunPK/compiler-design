%{
    var path = require('path');
    var NumberNode = require(path.resolve('.//src/numberNode.js'))
    var OperatorNode = require(path.resolve('./src/operatorNode.js'))
    var Identifier = require(path.resolve('./src/identifier.js'))
%}

%lex
%%

[0-9]+("."[0-9]+)?\b  return 'NUMBER'
[a-z]                 return 'IDENTIFIER'
"-"                   return '-'
"+"                   return '+'
"*"                   return '*'
"="                   return '='
"/"                   return '/'
"^"                   return '^'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

%left '+' '-'
%left '*' '/'
%right '^'
%right '%'

%start expressions

%%

expressions
    : expression EOF
        {
            return $$;
        }
    ;

expression
    : e
    | assignment_expression
    ;

assignment_expression
    : IDENTIFIER '=' e
        {
            $$ = new Identifier($1,$2,$3);
        }
    ;

e
    : e '+' e
        {$$ = new OperatorNode($2,$1,$3); }
    | e '-' e
        {$$ = new OperatorNode($2,$1,$3); }
    | e '*' e
        {$$ = new OperatorNode($2,$1,$3); }
    | e '/' e
        {$$ = new OperatorNode($2,$1,$3); }
    | e '^' e
        {$$ = new OperatorNode($2,$1,$3); }
    | NUMBER
        {$$ = new NumberNode(yytext);}
    | IDENTIFIER
        {$$ = yytext;}
    ;

