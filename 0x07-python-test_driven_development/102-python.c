#include <stdio.h>
#include <string.h>
#include <Python.h>

/**
 * print_python_string - Prints string information
 *
 * @p: Python Object
 * Return: no return
 */
void print_python_string(PyObject *p)
{
    printf("[.] string object info\n");

    if (!PyObject_IsInstance(p, (PyObject *)&PyUnicode_Type)) {
        printf("  [ERROR] Invalid String Object\n");
        return;
    }

    if (PyUnicode_IS_COMPACT_ASCII(p))
        printf("  type: compact ascii\n");
    else
        printf("  type: compact unicode object\n");

    printf("  length: %ld\n", PyUnicode_GET_SIZE(p));
    printf("  value: %s\n", PyUnicode_AsUTF8(p));
}

